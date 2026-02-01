import { CollectionConfig } from 'payload';

export const ContactRequests: CollectionConfig = {
  slug: 'contact-requests',
  access: {
    create: () => true, // Allow public submissions
    read: ({ req: { user } }) => {
        // If there is a user (admin), return true. Otherwise, false.
        return Boolean(user);
      },
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'text', required: true },
    { name: 'message', type: 'textarea', required: true },
  ],
};