"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "glass";
type Size = "default" | "sm" | "lg";

export interface LiquidGlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const variants: Record<Variant, React.CSSProperties> = {
  primary: { background: "linear-gradient(120deg, #5271FF, #7560E8)", color: "#FFFFFF", border: "1px solid rgba(82,113,255,.8)", boxShadow: "0 10px 24px rgba(82,113,255,.22)" },
  secondary: { backgroundColor: "#FFFFFF", color: "#202436", border: "1px solid rgba(167,139,250,.55)" },
  glass: { backgroundColor: "rgba(255,255,255,.66)", color: "#202436", border: "1px solid rgba(255,255,255,.88)", backdropFilter: "blur(15px)", boxShadow: "inset 0 1px 0 rgba(255,255,255,.8), 0 8px 22px rgba(44,47,76,.08)" },
};

const sizes: Record<Size, string> = { default: "px-7 py-3.5 text-xs", sm: "px-5 py-2.5 text-[11px]", lg: "px-9 py-4 text-sm" };

export const LiquidGlassButton = React.forwardRef<HTMLButtonElement, LiquidGlassButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, type = "button", style, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return <Component ref={ref} type={asChild ? undefined : type} className={cn("glass-button relative inline-flex select-none items-center justify-center gap-2 overflow-hidden rounded-full font-semibold uppercase tracking-wide transition duration-300 hover:-translate-y-0.5 active:scale-[.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5271FF] disabled:pointer-events-none disabled:opacity-50", sizes[size], className)} style={{ ...variants[variant], ...style }} {...props} />;
  },
);
LiquidGlassButton.displayName = "LiquidGlassButton";
