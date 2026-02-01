'use client'

import React from 'react'
import { Star, Shield, Zap, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const iconMap: any = { Star, Shield, Zap, Heart }

export const FeaturesBlock = ({ heading, cards }: any) => {
  return (
    <section className="py-20 bg-white" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        {heading && (
          <h2 id="features-heading" className="text-3xl font-bold text-center mb-12 text-slate-900">
            {heading}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards?.map((card: any, i: number) => {
            const Icon = iconMap[card.icon] || Star
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }} // Stagger effect
                className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <Icon className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2 text-slate-900">{card.title}</h3>
                <p className="text-slate-600">{card.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
