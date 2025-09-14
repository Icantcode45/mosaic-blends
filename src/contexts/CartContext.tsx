import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  category: string | null;
  stock_quantity: number;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_CART_OPEN'; payload: boolean }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const initialState: CartState = {
  items: [],
  isOpen: false,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.product.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { id: action.payload.id, product: action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    case 'SET_CART_OPEN':
      return {
        ...state,
        isOpen: action.payload,
      };
    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}

interface CartContextType {
  state: CartState;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { toast } = useToast();

  // Load cart from localStorage on mount and sync with database
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
    
    // Load cart from database if user is authenticated
    loadCartFromDatabase();
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items));
    // Sync to database if user is authenticated
    syncCartToDatabase();
  }, [state.items]);

  const loadCartFromDatabase = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data: cartItems, error } = await supabase
        .from('cart_items')
        .select(`
          id,
          quantity,
          products (
            id,
            name,
            description,
            price,
            image_url,
            category,
            stock_quantity
          )
        `)
        .eq('user_id', session.user.id);

      if (error) {
        console.error('Error loading cart from database:', error);
        return;
      }

      if (cartItems && cartItems.length > 0) {
        const items = cartItems.map(item => ({
          id: item.id,
          product: item.products as any,
          quantity: item.quantity,
        }));
        dispatch({ type: 'LOAD_CART', payload: items });
      }
    } catch (error) {
      console.error('Error loading cart from database:', error);
    }
  };

  const syncCartToDatabase = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session || state.items.length === 0) return;

      // Clear existing cart items for user
      await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', session.user.id);

      // Insert current cart items
      const cartItems = state.items.map(item => ({
        user_id: session.user.id,
        product_id: item.product.id,
        quantity: item.quantity,
      }));

      const { error } = await supabase
        .from('cart_items')
        .insert(cartItems);

      if (error) {
        console.error('Error syncing cart to database:', error);
      }
    } catch (error) {
      console.error('Error syncing cart to database:', error);
    }
  };

  const addItem = async (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    
    // Sync to database if user is authenticated
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        await syncCartToDatabase();
      }
      } catch (error) {
        // Log error for debugging in development
        if (process.env.NODE_ENV === 'development') {
          console.error('Error adding item to database:', error);
        }
        
        toast({
          title: "Warning",
          description: "Item added to cart but failed to sync. Please refresh if you experience issues.",
          variant: "default",
        });
    }
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const openCart = () => {
    dispatch({ type: 'SET_CART_OPEN', payload: true });
  };

  const closeCart = () => {
    dispatch({ type: 'SET_CART_OPEN', payload: false });
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}