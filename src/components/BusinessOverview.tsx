import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { BusinessItem } from './BusinessShowcase';
import { BUSINESS_DATA } from './BusinessShowcase';

import { useScrollReveal } from '../hooks/useScrollReveal';

interface BusinessOverviewProps {
  onSelectBusiness: (business: BusinessItem) => void;
}

export const BusinessOverview: React.FC<BusinessOverviewProps> = ({ 
  onSelectBusiness 
}) => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const cards = [
    {
      data: BUSINESS_DATA[0],
      title: 'The Lounge RK 2.0',
      subtitle: 'Contemporary dining.\nModern experiences.',
      image: '/images/lounge_rk_2.jpg',
      categoryTag: 'Hospitality • Lounge',
      accentColor: '#173D33',
      cardBg: '#FFFFFF',
      borderColor: 'rgba(23, 61, 51, 0.16)',
      tagColor: '#173D33',
    },
    {
      data: BUSINESS_DATA[1],
      title: 'The Lounge RK',
      subtitle: 'A refined space\nfor meaningful moments.',
      image: '/images/lounge_rk.jpg',
      categoryTag: 'Intimate Dining • Cocktails',
      accentColor: '#804C3B',
      cardBg: '#FCFAF8',
      borderColor: 'rgba(128, 76, 59, 0.20)',
      tagColor: '#804C3B',
    },
    {
      data: BUSINESS_DATA[2],
      title: 'HIVE RK Enterprise Automobiles',
      subtitle: 'Premium cars.\nExceptional journeys.',
      image: '/images/automobiles.jpg',
      categoryTag: 'Automotive • Bespoke Fleet',
      accentColor: '#293F46',
      cardBg: '#F7F9FA',
      borderColor: 'rgba(41, 63, 70, 0.20)',
      tagColor: '#293F46',
    },
  ];

  return (
    <section 
      ref={ref}
      aria-label="Business Overview"
      style={{
        backgroundColor: 'var(--warm-paper)',
        color: 'var(--charcoal-ink)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderTop: '1px solid rgba(182, 155, 101, 0.32)',
        borderBottom: '1px solid rgba(182, 155, 101, 0.32)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div 
          className={`reveal-fade-up ${isRevealed ? 'is-revealed' : ''}`}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3.5rem',
            gap: '2.5rem',
            flexWrap: 'wrap',
            transitionDelay: '0.08s',
          }}
        >
          {/* Left Title */}
          <div>
            <div style={{ marginBottom: '0.75rem' }}>
              <span 
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-eyebrow-size)',
                  letterSpacing: 'var(--text-eyebrow-tracking)',
                  textTransform: 'uppercase',
                  color: 'var(--hive-forest)',
                  fontWeight: 600,
                }}
              >
                OUR BUSINESSES
              </span>
            </div>
            {/* Section Title: Cormorant Garamond, 38–50px desktop */}
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--text-section-size)',
                lineHeight: 'var(--text-section-lh)',
                fontWeight: 400,
                color: 'var(--hive-forest)',
                letterSpacing: '-0.015em',
                maxWidth: '18ch',
              }}
            >
              Distinct experiences.<br />
              Unified by excellence.
            </h2>
          </div>

          {/* Right Editorial Subtext: Manrope 14–16px */}
          <div style={{ maxWidth: '420px', position: 'relative' }}>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-body-size)',
                color: '#3A423F',
                lineHeight: 'var(--text-body-lh)',
                fontWeight: 400,
                marginBottom: '1.25rem',
              }}
            >
              Three distinct businesses. Each with its own identity, connected by a shared commitment to quality, comfort and extraordinary experiences.
            </p>
            {/* Subtle Quiet Brass accent line */}
            <div 
              style={{
                width: '48px',
                height: '1px',
                backgroundColor: 'var(--quiet-brass)',
              }}
            />
          </div>
        </div>

        {/* 3 Secondary Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '2rem',
          }}
        >
          {cards.map((card, idx) => (
            <article
              key={idx}
              className={`overview-card reveal-fade-up ${isRevealed ? 'is-revealed' : ''}`}
              onClick={() => onSelectBusiness(card.data)}
              style={{
                backgroundColor: card.cardBg,
                border: `1px solid ${card.borderColor}`,
                borderRadius: '1px',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 10px rgba(20, 24, 23, 0.03)',
                position: 'relative',
                transitionDelay: `${0.18 + idx * 0.14}s`,
              }}
            >
              {/* Card Image with subtle hover zoom */}
              <div 
                style={{
                  height: '230px',
                  width: '100%',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#E6E1D3',
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  className="card-img"
                />
                
                {/* Category Tag: Manrope 10.5px, 0.12em tracking */}
                <span
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    left: '0.85rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.96)',
                    color: card.tagColor,
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '1px',
                    border: `1px solid ${card.borderColor}`,
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  {card.categoryTag}
                </span>
              </div>

              {/* Card Content Footer */}
              <div
                style={{
                  padding: '1.65rem 1.65rem 1.4rem',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexGrow: 1,
                  backgroundColor: card.cardBg,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'var(--text-card-size)',
                      fontWeight: 500,
                      color: card.accentColor,
                      marginBottom: '0.35rem',
                      lineHeight: 'var(--text-card-lh)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8125rem',
                      color: '#4A524F',
                      lineHeight: 1.5,
                      whiteSpace: 'pre-line',
                      fontWeight: 400,
                      margin: 0,
                    }}
                  >
                    {card.subtitle}
                  </p>
                </div>

                {/* Arrow Button with micro hover translation */}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    border: `1px solid ${card.borderColor}`,
                    color: card.accentColor,
                    backgroundColor: '#FFFFFF',
                    flexShrink: 0,
                    transition: 'all 0.25s ease',
                  }}
                  className="card-arrow"
                >
                  <ArrowRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (hover: hover) and (pointer: fine) {
          .overview-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 28px rgba(20, 24, 23, 0.08);
          }
          .overview-card:hover .card-img {
            transform: scale(1.04);
          }
          .overview-card:hover .card-arrow {
            transform: translateX(3px);
          }
        }
      `}</style>
    </section>
  );
};

