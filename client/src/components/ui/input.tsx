"use client"

import * as React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  variant?: "default" | "signin"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", placeholder, type = "text", value, onChange, variant = "default", ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={`block w-full h-[48px] rounded-[30px] px-4 
            appearance-none border border-black/10 bg-white/60
            text-black placeholder:text-black/40
            focus:outline-none focus:border-black/20
            ${className}`}
          placeholder={placeholder}
          ref={ref}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input } 