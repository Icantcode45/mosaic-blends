import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-brand-teal text-primary-foreground hover:from-primary-hover hover:to-brand-teal/90 shadow-glow-primary hover:shadow-premium hover:scale-[1.02] active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-medium hover:shadow-large hover:scale-[1.02]",
        outline:
          "border-2 border-border bg-background/50 backdrop-blur-sm hover:bg-primary/5 hover:text-primary hover:border-primary/30 shadow-subtle hover:shadow-medium hover:scale-[1.02]",
        secondary:
          "bg-secondary/80 backdrop-blur-sm text-secondary-foreground hover:bg-secondary shadow-subtle hover:shadow-medium hover:scale-[1.02]",
        ghost: "hover:bg-muted/80 hover:text-foreground hover:scale-[1.02] backdrop-blur-sm",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-hover",
        premium: "bg-gradient-to-r from-brand-purple to-brand-lavender text-white shadow-glow-soft hover:shadow-premium hover:scale-[1.02]",
        glass: "bg-background/20 backdrop-blur-xl border border-border/20 hover:bg-background/30 hover:border-border/40 shadow-medium hover:shadow-large"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-xl px-4 text-xs",
        lg: "h-14 rounded-2xl px-8 text-base font-semibold",
        xl: "h-16 rounded-3xl px-12 text-lg font-bold",
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
