import React from 'react';
import { ArrowRight } from 'lucide-react';

import { useScrollReveal } from '../hooks/useScrollReveal';
import { BUSINESS_DATA, type BusinessItem } from '../data/businessData';

export type { BusinessItem };
export { BUSINESS_DATA };


interface BusinessShowcaseProps {
  onSelectBusiness: (business: BusinessItem) => void;
}

const ShowcaseItemArticle: React.FC<{
  biz: BusinessItem;
  onSelectBusiness: (biz: BusinessItem) => void;
}> = ({ biz, onSelectBusiness }) => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.18 });

  return (
    <article
      ref={ref}
      id={`showcase-${biz.id}`}
      style={{
        position: 'relative',
        minHeight: '580px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: biz.theme.baseBg,
        borderBottom: `1px solid ${biz.theme.borderColor}`,
      }}
    >
      {/* Panoramic Section Background Image: Natural clarity + subtle scroll scale */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: `url('${biz.image}')`,
          backgroundPosition: 'right 25% center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transition: 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isRevealed ? 'scale(1.0)' : 'scale(1.045)',
        }}
        className="showcase-bg"
      />

      {/* Subtle Charcoal Gradient strictly behind text on left */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: biz.theme.gradientOverlay,
        }}
      />

      {/* Section Content Grid */}
      <div 
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          paddingTop: '4.5rem',
          paddingBottom: '4.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem',
        }}
      >
        {/* Left Editorial Text Column */}
        <div style={{ maxWidth: '560px', flex: '1 1 auto' }}>
          {/* Restrained Eyebrow: Stagger 0.1s */}
          {biz.tag && (
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
                  fontWeight: 500,
                  color: biz.theme.accentColor,
                }}
              >
                {biz.tag}
              </span>
            </div>
          )}

          {/* Headline: Masked reveal line */}
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-business-size)',
              lineHeight: 'var(--text-business-lh)',
              fontWeight: 400,
              color: 'var(--warm-paper)',
              marginBottom: '1.25rem',
              letterSpacing: '-0.015em',
              textShadow: '0 2px 14px rgba(0, 0, 0, 0.5)',
              maxWidth: '18ch',
            }}
          >
            <span className="mask-reveal-wrap">
              <span 
                className={`mask-reveal-item ${isRevealed ? 'is-revealed' : ''}`}
                style={{ transitionDelay: '0.22s' }}
              >
                {biz.headline}
              </span>
            </span>
          </h2>

          {/* Description: Stagger 0.36s */}
          <p
            className={`reveal-fade-up ${isRevealed ? 'is-revealed' : ''}`}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-body-size)',
              color: 'var(--warm-paper-dark)',
              lineHeight: 'var(--text-body-lh)',
              maxWidth: 'var(--text-body-max)',
              marginBottom: '2rem',
              fontWeight: 400,
              transitionDelay: '0.36s',
            }}
          >
            {biz.description}
          </p>

          {/* CTA Link: Stagger 0.48s */}
          <div
            className={`reveal-fade-up ${isRevealed ? 'is-revealed' : ''}`}
            style={{ transitionDelay: '0.48s' }}
          >
            <button
              onClick={() => onSelectBusiness(biz)}
              className="editorial-link"
              id={`cta-${biz.id}`}
              style={{
                color: 'var(--warm-paper)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
              }}
            >
              <span>{biz.ctaText}</span>
              <ArrowRight size={15} className="arrow-icon" style={{ color: 'var(--quiet-brass)' }} />
            </button>
          </div>
        </div>

        {/* Right Side Category Labels: Staggered side reveal */}
        <aside 
          className="side-labels-wrapper"
          aria-label={`${biz.headline} highlights`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center',
            gap: '0.65rem',
            paddingLeft: '2rem',
            borderLeft: `1px solid ${biz.theme.borderColor}`,
            flexShrink: 0,
          }}
        >
          {biz.sideLabels.map((label, labelIdx) => (
            <span
              key={labelIdx}
              className={`side-tag-item reveal-fade-up ${isRevealed ? 'is-revealed' : ''}`}
              style={{
                color: 'var(--warm-paper-dark)',
                transitionDelay: `${0.22 + labelIdx * 0.12}s`,
              }}
            >
              {label}
            </span>
          ))}
        </aside>
      </div>

      <style>{`
        @media (hover: hover) and (pointer: fine) {
          #showcase-${biz.id}:hover .showcase-bg {
            transform: scale(1.025) !important;
          }
        }
        @media (max-width: 840px) {
          .side-labels-wrapper {
            display: none !important;
          }
        }
      `}</style>
    </article>
  );
};

export const BusinessShowcase: React.FC<BusinessShowcaseProps> = ({ onSelectBusiness }) => {
  return (
    <section 
      id="businesses" 
      aria-label="Three Distinct Businesses"
      style={{ width: '100%', position: 'relative' }}
    >
      {BUSINESS_DATA.map((biz) => (
        <ShowcaseItemArticle 
          key={biz.id}
          biz={biz}
          onSelectBusiness={onSelectBusiness}
        />
      ))}
    </section>
  );
};

