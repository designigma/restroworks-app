'use server';

import { getPayload } from 'payload';
import configPromise from '@payload-config';

export const submitContact = async (prevState: any, formData: FormData) => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    const payload = await getPayload({ config: configPromise });

    await payload.create({
      collection: 'contact-requests',
      data: {
        name,
        email,
        message,
      },
    });

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to send message. Please try again.' };
  }
};