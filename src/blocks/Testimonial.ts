import { Block } from 'payload';

export const Testimonial: Block = {
  slug: 'testimonial',
  fields: [
    { name: 'quote', type: 'textarea', localized: true, required: true },
    { name: 'author', type: 'text', required: true },
    { name: 'role', type: 'text' },
  ],
};