'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const HeroBlock = ({ heading, subheading, backgroundImage }: any) => {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden bg-slate-900">
      {backgroundImage?.url && (
        <Image
          src={backgroundImage.url}
          alt={backgroundImage.alt || 'Hero Background'}
          fill
          className="object-cover opacity-50"
          priority
        />
      )}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{heading}</h1>
          <p className="text-xl md:text-2xl opacity-90">{subheading}</p>
        </motion.div>
      </div>
    </section>
  )
}
