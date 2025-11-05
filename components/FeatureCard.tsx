'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FeatureCardProps {
  title: string
  description: string
  icon?: ReactNode
  delay?: number
}

export default function FeatureCard({ title, description, icon, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative p-6 rounded-xl bg-gradient-to-br from-midnight-black via-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300"
    >
      {/* Orange accent edge */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-luma-orange via-luma-amber to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/10 to-luminite-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 text-luminite-blue group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-display font-bold mb-2 gradient-text">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

