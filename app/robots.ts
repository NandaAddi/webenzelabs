import { Metadata } from 'next';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://webenze.com/sitemap.xml',
  }
}


