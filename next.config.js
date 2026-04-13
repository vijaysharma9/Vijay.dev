/** @type {import('next').NextConfig} */
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  'img-src \'self\' data: https:',
  "connect-src 'self' https:",
  "frame-ancestors 'none'",
  "form-action 'self'"
].join('; ');

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'hiredevelopershop.com' },
      { protocol: 'https', hostname: 'www.hiredevelopershop.com' }
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()'
          },
          { key: 'Content-Security-Policy', value: contentSecurityPolicy }
        ]
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.hiredevelopershop.com' }],
        destination: 'https://hiredevelopershop.com/:path*',
        permanent: true
      },
      { source: '/service', destination: '/services', permanent: true },
      { source: '/portfolio', destination: '/work', permanent: true },
      { source: '/contact', destination: '/hire', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      {
        source: '/hire-react-developer',
        destination: '/#services',
        permanent: true
      },
      {
        source: '/hire-nodejs-developer',
        destination: '/#services',
        permanent: true
      },
      {
        source: '/it-consultancy-services',
        destination: '/#services',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;

