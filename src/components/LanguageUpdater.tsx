'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const LanguageUpdater = () => {
  const searchParams = useSearchParams()
  const lang = searchParams.get('lang')

  useEffect(() => {
    // Dynamically update the <html> tag
    document.documentElement.lang = lang === 'es' ? 'es' : 'en'
  }, [lang])

  return null // It renders nothing visually
}
