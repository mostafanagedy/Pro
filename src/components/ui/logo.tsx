import * as React from "react"
import { cn } from "@/lib/utils"

export function Logo({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <div className="flex items-center gap-2 font-bold tracking-tight">
      <svg
        width="32"
        height="32"
        viewBox="0 0 128 128"
        role="img"
        aria-label="Nagedy monogram"
        className={cn("text-primary", className)}
        {...props}
      >
        <g fill="currentColor">
          <path d="M18 22 L64 10 L64 84 Q64 87 62 89 L34 114 Q32.5 115.5 31 115.5 Q28.5 115.5 28.5 112.5 L28.5 46 L18 35 Z" />
          <path d="M74 22 L102 12 L112 22 L112 84 Q112 86.5 110.5 88.5 L82 116 L74 123 Z" />
          <rect x="66" y="40" width="8" height="22" rx="2" transform="skewX(-15)" />
        </g>
      </svg>
      <span className="text-xl font-sans tracking-tight">NAGEDY</span>
    </div>
  )
}
