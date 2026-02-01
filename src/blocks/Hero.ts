import { Block } from 'payload';

export const Hero: Block = {
  slug: 'hero', // This is the ID used in the database
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'subheading',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media', // Matches your existing Media.ts collection
      required: true,
    },
  ],
};