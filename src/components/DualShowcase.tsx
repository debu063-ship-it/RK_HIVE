import React from 'react';
import type { BusinessItem } from './BusinessShowcase';
import { BUSINESS_DATA } from './BusinessShowcase';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface DualShowcaseProps {
  onSelectBusiness: (business: BusinessItem) => void;
}

export const DualShowcase: React.FC<DualShowcaseProps> = ({ onSelectBusiness }) => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const lounge2 = BUSINESS_DATA[0];
  const loungeClassic = BUSINESS_DATA[1];

  return (
    <section 
      ref={ref}
      id="dual-showcase"
      aria-label="Signature Hospitality Showcases"
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #EBEBEB',
      }}
    >
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          width: '100%',
          minHeight: '560px',
        }}
        className="banham-dual-grid"
      >
        {/* CARD 1: The Lounge RK 2.0 (Matches Banham 'Signature Locks' Card) */}
        <div
          id="lounge-2-split"
          style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: '480px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '4.5rem 2.5rem',
            borderRight: '1px solid rgba(255, 255, 255, 0.15)',
            backgroundColor: '#101412',
          }}
          className="banham-split-card"
        >
          {/* Panoramic Image with subtle hover zoom */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              backgroundImage: `url('${lounge2.image}')`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: isRevealed ? 'scale(1.0)' : 'scale(1.05)',
            }}
            className="card-panoramic-bg"
          />

          {/* Dark Vignette Overlay for Text Legibility */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              backgroundColor: 'rgba(10, 14, 12, 0.48)',
              backgroundImage: 'linear-gradient(180deg, rgba(10, 14, 12, 0.35) 0%, rgba(10, 14, 12, 0.65) 100%)',
            }}
          />

          {/* Centered Content */}
          <div style={{ position: 'relative', zIndex: 5, maxWidth: '440px', margin: '0 auto' }}>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                fontWeight: 400,
                color: '#FFFFFF',
                marginBottom: '1rem',
                letterSpacing: '-0.01em',
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.5)',
              }}
            >
              The Lounge RK 2.0
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.925rem',
                color: 'rgba(255, 255, 255, 0.94)',
                lineHeight: 1.65,
                marginBottom: '2.25rem',
                fontWeight: 400,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
              }}
            >
              Open-air botanical terrace dining, artisanal craft drinks and modern shared gastronomic moments.
            </p>

            <button
              onClick={() => onSelectBusiness(lounge2)}
              className="btn-banham-white"
            >
              Discover Lounge 2.0
            </button>
          </div>
        </div>

        {/* CARD 2: The Lounge RK (Matches Banham 'Bespoke Doors' Card) */}
        <div
          id="lounge-classic-split"
          style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: '480px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '4.5rem 2.5rem',
            backgroundColor: '#180E0A',
          }}
          className="banham-split-card"
        >
          {/* Panoramic Image with subtle hover zoom */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              backgroundImage: `url('${loungeClassic.image}')`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: isRevealed ? 'scale(1.0)' : 'scale(1.05)',
            }}
            className="card-panoramic-bg"
          />

          {/* Dark Vignette Overlay for Text Legibility */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              backgroundColor: 'rgba(16, 12, 10, 0.48)',
              backgroundImage: 'linear-gradient(180deg, rgba(16, 12, 10, 0.35) 0%, rgba(16, 12, 10, 0.65) 100%)',
            }}
          />

          {/* Centered Content */}
          <div style={{ position: 'relative', zIndex: 5, maxWidth: '440px', margin: '0 auto' }}>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                fontWeight: 400,
                color: '#FFFFFF',
                marginBottom: '1rem',
                letterSpacing: '-0.01em',
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.5)',
              }}
            >
              The Lounge RK
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.925rem',
                color: 'rgba(255, 255, 255, 0.94)',
                lineHeight: 1.65,
                marginBottom: '2.25rem',
                fontWeight: 400,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
              }}
            >
              An intimate nightlife escape crafted with private velvet banquettes, curated music and bespoke mixology.
            </p>

            <button
              onClick={() => onSelectBusiness(loungeClassic)}
              className="btn-banham-white"
            >
              Discover The Lounge
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (hover: hover) and (pointer: fine) {
          .banham-split-card:hover .card-panoramic-bg {
            transform: scale(1.03) !important;
          }
        }
        @media (max-width: 860px) {
          .banham-dual-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
