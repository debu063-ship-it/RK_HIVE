import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const StatementDivider: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      aria-label="Enterprise Heritage Statement"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        borderBottom: '1px solid #EBEBEB',
      }}
    >
      <div 
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {/* Centered Large Editorial Headline (Matches Banham 'Handcrafted in Britain Since 1926') */}
          <h2
            className={`reveal-fade-up ${isRevealed ? 'is-revealed' : ''}`}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.15rem, 4.2vw, 3.4rem)',
              lineHeight: 1.15,
              fontWeight: 400,
              color: '#111413',
              marginBottom: '1.5rem',
              letterSpacing: '-0.015em',
              transitionDelay: '0.1s',
            }}
          >
            Curated with Passion.<br />
            Driven by Purpose.
          </h2>

          {/* Centered Subtitle Paragraph */}
          <p
            className={`reveal-fade-up ${isRevealed ? 'is-revealed' : ''}`}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
              color: '#4A504E',
              lineHeight: 1.72,
              maxWidth: '620px',
              margin: '0 auto',
              fontWeight: 400,
              transitionDelay: '0.25s',
            }}
          >
            Marrying contemporary culinary hospitality, refined nightlife ambience, and bespoke automotive engineering — every experience across HIVE RK Enterprises is crafted to inspire.
          </p>

          {/* Quiet Brass Accent Divider */}
          <div 
            className={`reveal-fade ${isRevealed ? 'is-revealed' : ''}`}
            style={{
              width: '42px',
              height: '1px',
              backgroundColor: 'var(--quiet-brass)',
              margin: '2rem auto 0',
              transitionDelay: '0.4s',
            }}
          />
        </div>
      </div>
    </section>
  );
};
