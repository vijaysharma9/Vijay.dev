import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/hire/confirmation'],
      },
    ],
    sitemap: 'https://www.hiredevelopershop.com/sitemap.xml',
  }
}
