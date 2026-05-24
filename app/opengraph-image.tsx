import { ImageResponse } from 'next/og';

// Image dimensions matching standard Facebook/Twitter OG formats
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle Elegant Thin Luxury Border */}
        <div
          style={{
            position: 'absolute',
            inset: 35,
            border: '2px solid rgba(201, 168, 76, 0.25)',
            display: 'flex',
          }}
        />

        {/* Brand Display Header */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            color: '#F5F0E8',
            marginBottom: 16,
            letterSpacing: '0.05em',
            display: 'flex',
          }}
        >
          THE EXECUTIVE IMAGE
        </div>

        {/* Golden Horizontal Center Line Rule */}
        <div
          style={{
            width: 160,
            height: 2,
            background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            marginBottom: 24,
            display: 'flex',
          }}
        />

        {/* Elegant Sub-Heading Descriptive Callout */}
        <div
          style={{
            fontSize: 22,
            color: '#8A8580',
            maxWidth: 820,
            textAlign: 'center',
            lineHeight: 1.5,
            marginBottom: 45,
            display: 'flex',
          }}
        >
          Ceramic Coating &amp; Mobile Detailing — Stuart, Port St. Lucie &amp; the Treasure Coast
        </div>

        {/* Contact Info Badge Banner */}
        <div
          style={{
            display: 'flex',
          }}
        >
          <div
            style={{
              padding: '14px 28px',
              border: '1.5px solid #C9A84C',
              color: '#C9A84C',
              fontSize: 18,
              borderRadius: 4,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              display: 'flex',
            }}
          >
            Call Jason: (772) 631-1339
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
