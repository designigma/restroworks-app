import { fetchPage } from '@/utils/fetchPage'
import { BlockRenderer } from '@/components/BlockRenderer'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

type Props = {
  params: Promise<{ slug: string[] }>
  searchParams: Promise<{ lang?: string }>
}

export async function generateMetadata(props: Props) {
  const params = await props.params
  const searchParams = await props.searchParams

  const slug = params.slug?.[0] || 'home'
  const lang = (searchParams.lang as 'en' | 'es') || 'en'

  const page = await fetchPage(slug, lang)
  return {
    title: page?.meta?.title || 'Restroworks Assignment',
    description: page?.meta?.description,
  }
}

export default async function Page(props: Props) {
  const params = await props.params
  const searchParams = await props.searchParams
  const slug = params.slug?.[0] || 'home'
  const lang = (searchParams.lang as 'en' | 'es') || 'en'

  const page = await fetchPage(slug, lang)

  if (!page) return notFound()

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <BlockRenderer blocks={page.layout} />
    </main>
  )
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    limit: 100,
    depth: 0,
  })

  return pages.docs.map(({ slug }) => ({
    slug: [slug],
  }))
}
