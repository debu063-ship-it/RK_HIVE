import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FinalCTAProps {
  onExploreAll: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreAll }) => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      aria-label="Closing Vision"
      style={{
        position: 'relative',
        minHeight: '460px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#0F2620',
        borderBottom: '1px solid rgba(182, 155, 101, 0.22)',
      }}
    >
      {/* Background Video: Ambient Cinematic Loop */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          backgroundColor: '#0F2620',
          transition: 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isRevealed ? 'scale(1.0)' : 'scale(1.045)',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/closing_cta.jpg"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        >
          <source src="/videos/hero_ambient.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Subtle charcoal gradient strictly behind text on the left */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: `
            linear-gradient(90deg, 
              rgba(15, 38, 32, 0.92) 0%, 
              rgba(15, 38, 32, 0.74) 28%, 
              rgba(15, 38, 32, 0.15) 45%, 
              transparent 58%
            )
          `,
        }}
      />

      {/* Content Container */}
      <div 
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          paddingTop: '4.5rem',
          paddingBottom: '4.5rem',
        }}
      >
        <div style={{ maxWidth: '560px' }}>
          {/* Eyebrow: Stagger 0.1s */}
          <div 
            className={`reveal-fade-up ${isRevealed ? 'is-revealed' : ''}`}
            style={{ marginBottom: '0.85rem', transitionDelay: '0.1s' }}
          >
            <span 
              style={{ 
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-eyebrow-size)',
                letterSpacing: 'var(--text-eyebrow-tracking)',
                textTransform: 'uppercase',
                color: 'var(--quiet-brass)',
                fontWeight: 500,
              }}
            >
              HIVE RK ENTERPRISES
            </span>
          </div>

          {/* Headline: Masked line reveals */}
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-section-size)',
              lineHeight: '1.05',
              fontWeight: 400,
              color: 'var(--warm-paper)',
              marginBottom: '1.65rem',
              letterSpacing: '-0.015em',
              textShadow: '0 2px 14px rgba(0, 0, 0, 0.45)',
              maxWidth: '16ch',
            }}
          >
            <span className="mask-reveal-wrap">
              <span 
                className={`mask-reveal-item ${isRevealed ? 'is-revealed' : ''}`}
                style={{ transitionDelay: '0.22s' }}
              >
                Where luxury
              </span>
            </span>
            <span className="mask-reveal-wrap">
              <span 
                className={`mask-reveal-item ${isRevealed ? 'is-revealed' : ''}`}
                style={{ transitionDelay: '0.42s' }}
              >
                meets lifestyle.
              </span>
            </span>
          </h2>

          {/* CTA Link: Stagger 0.58s */}
          <div
            className={`reveal-fade-up ${isRevealed ? 'is-revealed' : ''}`}
            style={{ transitionDelay: '0.58s' }}
          >
            <button
              onClick={onExploreAll}
              className="editorial-link"
              id="closing-cta-link"
              style={{
                color: 'var(--warm-paper)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
              }}
            >
              <span>Explore all businesses</span>
              <ArrowRight size={15} className="arrow-icon" style={{ color: 'var(--quiet-brass)' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

