'use client'

import { useActionState } from 'react'
import { submitContact } from '@/actions/submitContact'
import { Loader2 } from 'lucide-react'

const initialState = {
  success: false,
  message: '',
}

export const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(submitContact, initialState)

  return (
    <form
      action={formAction}
      className="space-y-6 max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>

      {state.success ? (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
          {state.message}
        </div>
      ) : state.message ? (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
          {state.message}
        </div>
      ) : null}

      {!state.success && (
        <>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? <Loader2 className="animate-spin" /> : 'Send Message'}
          </button>
        </>
      )}
    </form>
  )
}
