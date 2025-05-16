"use client"

import type React from "react"

interface NeonButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

export function NeonButton({ children, onClick, className = "", variant = "primary", size = "md" }: NeonButtonProps) {
  const baseClasses = "relative font-medium rounded-md transition-all duration-300 overflow-hidden"

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2",
    lg: "px-7 py-3 text-lg",
  }

  const variantClasses = {
    primary:
      "bg-transparent border border-[#00F5D4] text-[#00F5D4] hover:bg-[#00F5D4]/10 hover:shadow-[0_0_15px_rgba(0,245,212,0.5)]",
    outline:
      "bg-transparent border border-white/20 text-white hover:border-[#00F5D4] hover:text-[#00F5D4] hover:shadow-[0_0_15px_rgba(0,245,212,0.3)]",
    ghost: "bg-transparent text-white hover:text-[#00F5D4] hover:bg-white/5",
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      <span className="relative z-10">{children}</span>
    </button>
  )
}

interface SplitButtonProps {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
  onClick?: () => void
  className?: string
}

export function SplitButton({ leftContent, rightContent, onClick, className = "" }: SplitButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center bg-transparent border border-[#00F5D4] text-[#00F5D4] rounded-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,245,212,0.5)] ${className}`}
    >
      <span className="px-4 py-2">{leftContent}</span>
      <span className="px-4 py-2 bg-[#00F5D4]/10 border-l border-[#00F5D4] group-hover:bg-[#00F5D4]/20 transition-colors duration-300">
        {rightContent}
      </span>
    </button>
  )
}
