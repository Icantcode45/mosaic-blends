import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 hover:scale-[1.02] active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-subtle hover:bg-primary-hover hover:shadow-medium",
        destructive:
          "bg-destructive text-destructive-foreground shadow-subtle hover:bg-destructive/90",
        outline:
          "border-2 border-gray-200 bg-background shadow-subtle hover:bg-gray-50 hover:border-gray-300 hover:shadow-medium text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-subtle hover:bg-secondary/80",
        ghost: "hover:bg-gray-50 hover:text-foreground text-muted-foreground",
        link: "text-primary underline-offset-4 hover:underline hover:scale-100",
        medical: "bg-primary text-primary-foreground shadow-subtle hover:bg-primary-hover hover:shadow-large",
        "medical-outline": "border-2 border-primary/20 bg-white text-primary shadow-subtle hover:bg-primary/5 hover:border-primary/40",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 rounded-full px-6 text-sm",
        lg: "h-14 rounded-full px-10 text-lg",
        xl: "h-16 rounded-full px-12 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
