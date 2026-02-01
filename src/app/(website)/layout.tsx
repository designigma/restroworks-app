import React from 'react'
import '../globals.css'
import { LanguageUpdater } from '@/components/LanguageUpdater'
import { Navbar } from '@/components/Navbar'

export const metadata = {
  title: 'Restroworks Assignment',
  description: 'Built with Payload 3.0',
}

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* 1. LanguageUpdater fixes the "en" to "es" on the client side */}
      <LanguageUpdater />
      <body className="bg-slate-50 text-slate-900">
        {/* 2. Navbar is shared across all website pages */}
        <Navbar />
        {children}
        <footer className="py-8 text-center text-slate-500 text-sm border-t mt-20">
          © 2024 Restroworks Assignment. Built with Payload 3.0.
        </footer>
      </body>
    </html>
  )
}
