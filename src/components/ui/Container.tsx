import React from "react";
import { cn } from "@/lib/utilities";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: "normal" | "narrow" | "wide";
}

export function Container({ width = "normal", className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "container",
        width === "narrow" && "container--narrow",
        width === "wide" && "container--wide",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
