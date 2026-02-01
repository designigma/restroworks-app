export const TestimonialBlock = ({ quote, author, role }: any) => {
  return (
    <section className="py-16 bg-slate-50 border-y">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <blockquote className="text-2xl font-medium italic mb-6">&quot;{quote}&quot;</blockquote>
        <div>
          <div className="font-bold">{author}</div>
          <div className="text-sm text-slate-500">{role}</div>
        </div>
      </div>
    </section>
  )
}
