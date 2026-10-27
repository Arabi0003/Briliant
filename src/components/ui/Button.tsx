import React from "react";
import { cn } from "@/lib/utilities";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "lg";
  children: React.ReactNode;
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "btn",
        variant === "primary" && "btn--primary",
        variant === "secondary" && "btn--secondary",
        variant === "outline" && "btn--outline",
        size === "lg" && "btn--lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
