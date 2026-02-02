import { Navbar } from '@/components/Navbar'
import { ContactForm } from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Us | Restroworks',
  description: 'Get in touch with our team.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="pt-20 pb-20 px-4 container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600">We&apos;d love to hear from you.</p>
        </div>
        <ContactForm />
      </div>
    </main>
  )
}
