import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'HireDeveloperShop — Hire Dedicated Developers'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px'
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: '#3b82f6',
            marginBottom: 24,
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}
        >
          HireDeveloperShop.com
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: 32,
            maxWidth: 800
          }}
        >
          Hire Dedicated Developers
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#9ca3af',
            maxWidth: 700,
            lineHeight: 1.5
          }}
        >
          Full-Stack, AI &amp; IT Consultancy for Startups &amp; Enterprises
        </div>
        <div style={{ display: 'flex', gap: 32, marginTop: 64 }}>
          {['8+ Years', '50+ Projects', '5.0 Upwork Rating', 'Top Rated'].map((stat) => (
            <div
              key={stat}
              style={{
                fontSize: 16,
                color: '#6b7280',
                borderLeft: '2px solid #3b82f6',
                paddingLeft: 16
              }}
            >
              {stat}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
