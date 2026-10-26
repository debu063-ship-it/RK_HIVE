import React from 'react';
import type { BusinessItem } from './BusinessShowcase';
import { BUSINESS_DATA } from './BusinessShowcase';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ExploreGridProps {
  onSelectBusiness: (business: BusinessItem) => void;
}

export const ExploreGrid: React.FC<ExploreGridProps> = ({ onSelectBusiness }) => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const columns = [
    {
      data: BUSINESS_DATA[0],
      title: 'The Lounge RK 2.0',
      description: 'From open-air garden terrace seating to artisanal global tapas, our culinary pavilion is designed for shared moments and lively gatherings.',
      image: BUSINESS_DATA[0].image,
      ctaText: 'Discover The Lounge RK 2.0',
    },
    {
      data: BUSINESS_DATA[1],
      title: 'The Lounge RK',
      description: 'Tailored nightlife ambience with curated soundscapes, private velvet booths and artisanal cocktails for celebrated evenings.',
      image: BUSINESS_DATA[1].image,
      ctaText: 'Discover The Lounge RK',
    },
    {
      data: BUSINESS_DATA[2],
      title: 'Automobiles & Fleet',
      description: 'From certified performance SUVs to exotic motorcycles and VIP delivery, our showroom atelier delivers pure driving freedom.',
      image: BUSINESS_DATA[2].image,
      ctaText: 'Discover Automobiles',
    },
  ];

  return (
    <section 
      ref={ref}
      id="explore-hive"
      aria-label="Explore HIVE RK Enterprises"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '6rem',
        paddingBottom: '6.5rem',
        borderBottom: '1px solid #EBEBEB',
      }}
    >
      <div className="container">
        {/* Centered Section Header (Matches Banham 'Explore Banham') */}
        <div style={{ textAlign: 'center', marginBottom: '3.75rem' }}>
          <h2
            className={`reveal-fade-up ${isRevealed ? 'is-revealed' : ''}`}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.15rem, 3.8vw, 3rem)',
              fontWeight: 400,
              color: '#111413',
              letterSpacing: '-0.015em',
            }}
          >
            Explore HIVE RK
          </h2>
        </div>

        {/* 3-Column Enterprise Showcase (Matches Banham Keyholding / Alarms / Safes Grid) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2.5rem',
          }}
          className="banham-3col-grid"
        >
          {columns.map((col, idx) => (
            <article
              key={col.title}
              id={idx === 2 ? 'automobiles-grid' : undefined}
              className={`reveal-fade-up ${isRevealed ? 'is-revealed' : ''}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                transitionDelay: `${0.12 + idx * 0.12}s`,
              }}
              onClick={() => onSelectBusiness(col.data)}
            >
              {/* Image Container */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16 / 10',
                  overflow: 'hidden',
                  backgroundColor: '#F5F4F0',
                  marginBottom: '1.65rem',
                  borderRadius: '1px',
                }}
                className="banham-col-img-wrap"
              >
                <img
                  src={col.image}
                  alt={col.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="banham-col-img"
                />
              </div>

              {/* Title in Serif */}
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  fontWeight: 400,
                  color: '#111413',
                  marginBottom: '0.85rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {col.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: '#4A504E',
                  lineHeight: 1.65,
                  maxWidth: '360px',
                  margin: '0 auto 1.5rem',
                  fontWeight: 400,
                }}
              >
                {col.description}
              </p>

              {/* Banham Clean Underline Link */}
              <span className="banham-underline-link">
                {col.ctaText}
              </span>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (hover: hover) and (pointer: fine) {
          .banham-col-img-wrap:hover .banham-col-img {
            transform: scale(1.04);
          }
        }
        @media (max-width: 900px) {
          .banham-3col-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
