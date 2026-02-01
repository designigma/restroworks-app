import Link from 'next/link'

export const Navbar = () => (
  <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="font-bold text-xl tracking-tight text-blue-600">
        RESTROWORKS
      </Link>

      <div className="flex items-center gap-6 text-sm font-medium">
        {/* Language Switcher */}
        <div className="flex gap-2 text-slate-500">
          <Link href="?lang=en" className="hover:text-blue-600 transition">
            EN
          </Link>
          <span className="opacity-30">|</span>
          <Link href="?lang=es" className="hover:text-blue-600 transition">
            ES
          </Link>
        </div>

        {/* Contact Us Button */}
        <Link
          href="/contact"
          className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition shadow-sm hover:shadow-md"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </nav>
)
