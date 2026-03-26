import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-2xl text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95 shadow-sm",
          {
            "bg-primary-site text-white hover:bg-primary-hover hover:shadow-xl hover:shadow-blue-500/20": variant === "primary",
            "bg-slate-50 text-slate-900 border border-slate-100 hover:bg-slate-100": variant === "secondary",
            "border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-900 shadow-none": variant === "outline",
            "bg-transparent hover:bg-slate-50 text-slate-900 shadow-none": variant === "ghost",
            "h-9 px-5 px-5 text-xs": size === "sm",
            "h-11 px-6 px-6": size === "md",
            "h-14 px-8 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }


