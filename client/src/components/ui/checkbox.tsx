"use client"

import * as React from "react"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean
  onCheckedChange?: (checked: boolean) => void
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = "", checked, onCheckedChange, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        <input
          type="checkbox"
          ref={ref}
          checked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          className={`h-5 w-5 rounded border border-black/10 
            checked:bg-[#00A82D] checked:border-[#00A82D]
            focus:outline-none focus:ring-2 focus:ring-[#00A82D]/20
            ${className}`}
          {...props}
        />
      </div>
    )
  }
)

Checkbox.displayName = "Checkbox"

export { Checkbox } 