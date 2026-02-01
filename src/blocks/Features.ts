import { Block } from 'payload';

export const Features: Block = {
  slug: 'features',
  labels: { singular: 'Feature Section', plural: 'Feature Sections' },
  fields: [
    { name: 'heading', type: 'text', localized: true },
    {
      name: 'cards',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', localized: true },
        { name: 'description', type: 'textarea', localized: true },
        { name: 'icon', type: 'text', defaultValue: 'Star' },
      ],
    },
  ],
};