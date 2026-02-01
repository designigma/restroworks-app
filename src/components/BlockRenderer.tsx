import React from 'react'
import { HeroBlock } from './blocks/Hero'
import { CTABlock } from './blocks/CTA'
import { TestimonialBlock } from './blocks/Testimonial'
import { FeaturesBlock } from './blocks/Features'

const components: any = {
  hero: HeroBlock,
  features: FeaturesBlock,
  cta: CTABlock,
  testimonial: TestimonialBlock,
}

export const BlockRenderer = ({ blocks }: { blocks?: any[] }) => {
  if (!blocks) return null
  return (
    <>
      {blocks.map((block, i) => {
        const Component = components[block.blockType]
        if (!Component) return null
        return <Component key={i} {...block} />
      })}
    </>
  )
}
