import React, { Suspense } from 'react'
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
      <Suspense fallback={null}>
        <LanguageUpdater />
      </Suspense>
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        {children}
        <footer className="py-8 text-center text-slate-500 text-sm border-t mt-20">
          © 2024 Restroworks Assignment. Built with Payload 3.0.
        </footer>
      </body>
    </html>
  )
}
