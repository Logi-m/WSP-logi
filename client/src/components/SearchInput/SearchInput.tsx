"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { fontBodyNormal } from "@/styles/typography"

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  className,
}: SearchInputProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={cn("relative", className)}>
      <button
        className={cn(
          "flex h-12 items-center justify-center rounded-full transition-all duration-500 ease-out",
          isExpanded ? "w-full bg-white/60" : "w-12 bg-transparent"
        )}
        onClick={() => setIsExpanded(true)}
      >
        <svg
          className="h-6 w-6 text-black-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <input
        type="text"
        className={cn(
          fontBodyNormal,
          "absolute left-0 top-0 h-12 w-full rounded-full border border-black-10 bg-white/60 pl-12 pr-4 text-black-100 placeholder-black-40 outline-none transition-all duration-500 ease-out",
          isExpanded
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        )}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => {
          if (!value) setIsExpanded(false)
        }}
      />
    </div>
  )
} 