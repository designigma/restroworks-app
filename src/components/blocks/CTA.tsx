import Link from 'next/link'

export const CTABlock = ({ heading, subheading, links }: any) => {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">{subheading}</p>
        <div className="flex gap-4 justify-center">
          {links?.map((link: any, i: number) => (
            <Link
              key={i}
              href={link.url}
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
