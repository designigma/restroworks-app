import { CollectionConfig } from 'payload';
import { Hero } from '../blocks/Hero';
import { Features } from '../blocks/Features';    
import { CTA } from '../blocks/CTA';              
import { Testimonial } from '../blocks/Testimonial';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, 
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      index: true, 
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        Hero,
        Features,   
        CTA,        
        Testimonial,
      ],
    },
    {
      name: 'meta',
      label: 'SEO',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', localized: true },
        { name: 'description', type: 'textarea', localized: true },
      ]
    }
  ],
};