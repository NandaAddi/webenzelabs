import { Metadata } from 'next';

export default function sitemap() {
  const baseUrl = 'https://webenze.com';
  
  const routes = ['', '/services', '/portfolio', '/pricing', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}


