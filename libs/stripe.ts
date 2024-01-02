import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2023-10-16', // Update to a valid and compatible version
  appInfo: {
    name: 'Spotify Clone',
    version: '0.1.0',
  },
});
