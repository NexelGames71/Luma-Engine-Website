'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-electric-violet to-luminite-blue text-white neon-glow-hover',
    secondary: 'bg-midnight-black border-2 border-electric-violet text-electric-violet hover:bg-electric-violet hover:text-white',
    outline: 'border-2 border-luminite-blue text-luminite-blue hover:bg-luminite-blue hover:text-midnight-black',
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href}>
        {buttonContent}
      </Link>
    )
  }

  return buttonContent
}

