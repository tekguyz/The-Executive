import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'The Executive Image | Ceramic Coating & Mobile Detailing';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#090909',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 80px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Golden ambient backlight glow */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '400px',
            height: '400px',
            background: '#C9A84C',
            borderRadius: '50%',
            opacity: 0.05,
            filter: 'blur(100px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-25%',
            right: '-10%',
            width: '400px',
            height: '400px',
            background: '#C9A84C',
            borderRadius: '50%',
            opacity: 0.04,
            filter: 'blur(100px)',
          }}
        />

        {/* Outer border frame */}
        <div
          style={{
            position: 'absolute',
            inset: '24px',
            border: '1px solid rgba(201, 168, 76, 0.22)',
            borderRadius: '16px',
            pointerEvents: 'none',
          }}
        />

        {/* Brand identity badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          {/* Logo container */}
          <div
            style={{
              width: '80px',
              height: '80px',
              border: '1px solid rgba(201, 168, 76, 0.45)',
              background: '#111111',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'rotate(45deg)',
            }}
          >
            <div
              style={{
                transform: 'rotate(-45deg)',
                color: '#C9A84C',
                fontSize: '36px',
                fontWeight: 'bold',
                lineHeight: 1,
              }}
            >
              E
            </div>
          </div>
        </div>

        {/* Large readable Title */}
        <div
          style={{
            display: 'flex',
            color: '#F5F0E8',
            fontSize: '56px',
            fontWeight: 800,
            textAlign: 'center',
            letterSpacing: '1px',
            marginBottom: '8px',
          }}
        >
          The Executive Image
        </div>

        {/* Subtitle with premium luxury letter spacing */}
        <div
          style={{
            display: 'flex',
            color: '#C9A84C',
            fontSize: '18px',
            textTransform: 'uppercase',
            letterSpacing: '5px',
            fontWeight: 700,
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          Ceramic Coating &amp; Mobile Detailing
        </div>

        {/* Three core pillars */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            marginBottom: '40px',
            alignItems: 'center',
          }}
        >
          {['Automotive', 'Marine', 'Aviation'].map((pillar, idx) => (
            <div
              key={pillar}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {idx > 0 && (
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'rgba(201, 168, 76, 0.55)',
                    marginRight: '12px',
                  }}
                />
              )}
              <span
                style={{
                  color: '#D1CDC7',
                  fontSize: '18px',
                  fontWeight: 500,
                }}
              >
                {pillar}
              </span>
            </div>
          ))}
        </div>

        {/* Grid bottom elements: trust ratings & location badge & phone contact info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1000px',
            marginTop: 'auto',
            borderTop: '1px solid rgba(201,168,76,0.12)',
            paddingTop: '32px',
          }}
        >
          {/* Trust rating badge */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <div
              style={{
                display: 'flex',
                color: '#C9A84C',
                fontSize: '20px',
                letterSpacing: '1px',
              }}
            >
              ★★★★★
            </div>
            <div
              style={{
                color: '#8A8580',
                fontSize: '14px',
              }}
            >
              5.0 Google Rating · 100+ Reviews
            </div>
          </div>

          {/* Location badge */}
          <div
            style={{
              display: 'flex',
              background: 'rgba(201, 168, 76, 0.08)',
              border: '1px solid rgba(201, 168, 76, 0.3)',
              padding: '8px 18px',
              borderRadius: '40px',
              color: '#C9A84C',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Treasure Coast, FL
          </div>

          {/* Phone Badge */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '4px',
            }}
          >
            <span
              style={{
                color: '#8A8580',
                fontSize: '11px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Direct Hotline
            </span>
            <span
              style={{
                color: '#E8C97A',
                fontSize: '22px',
                fontWeight: 'bold',
              }}
            >
              (772) 631-1339
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
