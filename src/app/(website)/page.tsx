import Page, { generateMetadata as generateSlugMetadata } from './[...slug]/page'

export async function generateMetadata(props: any) {
  return generateSlugMetadata({
    params: Promise.resolve({ slug: ['home'] }),
    searchParams: props.searchParams,
  })
}

export default async function Home(props: any) {
  return Page({
    params: Promise.resolve({ slug: ['home'] }),
    searchParams: props.searchParams,
  })
}
