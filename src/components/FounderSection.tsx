import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FounderSectionProps {
  onOpenEnquire?: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenEnquire }) => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.18 });

  return (
    <section
      ref={ref}
      id="about"
      aria-label="About the Founder"
      style={{
        backgroundColor: '#000000',
        borderBottom: '1px solid #1A1A1A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr',
          minHeight: '600px',
        }}
        className="founder-grid"
      >
        {/* Left: Asymmetrical Portrait Screen with Directional Image Reveal */}
        <div 
          style={{
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#000000',
            minHeight: '440px',
          }}
        >
          {/* Portrait Image: Authentic photo of Founder & Visionary Rahat Khan */}
          <img
            src="/images/founder.jpg"
            alt="Rahat Khan — Founder & Visionary"
            className={`directional-portrait-reveal ${isRevealed ? 'is-revealed' : ''}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 22%',
            }}
          />

          {/* Subtle edge transition to text panel */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, transparent 86%, rgba(0, 0, 0, 0.7) 100%)',
            }}
          />
        </div>

        {/* Right: Black Editorial Text Panel with Staggered Copy */}
        <div 
          style={{
            backgroundColor: '#000000',
            padding: '4.5rem 3.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
          }}
          className="founder-content"
        >
          <div style={{ position: 'relative', zIndex: 5, maxWidth: '560px' }}>
            {/* Headline: Masked line reveals */}
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--text-section-size)',
                lineHeight: 'var(--text-section-lh)',
                fontWeight: 400,
                color: 'var(--warm-paper)',
                marginBottom: '1.65rem',
                letterSpacing: '-0.015em',
                maxWidth: '18ch',
                textWrap: 'balance',
              }}
            >
              <span className="mask-reveal-wrap">
                <span 
                  className={`mask-reveal-item ${isRevealed ? 'is-revealed' : ''}`}
                  style={{ transitionDelay: '0.15s' }}
                >
                  Built on passion.
                </span>
              </span>
              <span className="mask-reveal-wrap">
                <span 
                  className={`mask-reveal-item ${isRevealed ? 'is-revealed' : ''}`}
                  style={{ transitionDelay: '0.3s' }}
                >
                  Driven by purpose.
                </span>
              </span>
            </h2>

            {/* Founder Vision Description: Stagger 0.45s */}
            <p
              className={`reveal-fade-up ${isRevealed ? 'is-revealed' : ''}`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-body-size)',
                color: 'var(--warm-paper-dark)',
                lineHeight: 'var(--text-body-lh)',
                maxWidth: '56ch',
                marginBottom: '2.5rem',
                fontWeight: 400,
                textWrap: 'pretty',
                transitionDelay: '0.45s',
              }}
            >
              HIVE RK Enterprises is the result of a vision to create more than just businesses — it's a commitment to curate meaningful experiences. What started as a passion for exceptional hospitality and fine automobiles has grown into a unified enterprise, built on trust, quality and a relentless pursuit of excellence.
            </p>

            {/* Split row: Typographic Signature on left + Quote on right (Stagger 0.78s) */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                alignItems: 'center',
                gap: '2.5rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                transitionDelay: '0.78s',
              }}
              className={`signature-quote-split reveal-fade-up ${isRevealed ? 'is-revealed' : ''}`}
            >
              {/* Dignified Editorial Author Lockup */}
              <div>
                <div 
                  style={{ 
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.55rem',
                    fontWeight: 400,
                    color: 'var(--warm-paper)',
                    lineHeight: 1.1,
                    letterSpacing: '0.01em',
                    marginBottom: '0.2rem',
                  }}
                >
                  Rahat Khan
                </div>
                <span 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    fontWeight: 500,
                    display: 'block',
                  }}
                >
                  Founder & Visionary
                </span>
              </div>

              {/* Vertical divider and Quote: Banham IvarItalic */}
              <div 
                style={{
                  borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
                  paddingLeft: '1.75rem',
                }}
                className="quote-column"
              >
                <blockquote
                  style={{
                    fontFamily: 'var(--font-serif-italic)',
                    fontSize: 'clamp(1.1rem, 1.35vw, 1.3rem)',
                    lineHeight: 1.45,
                    color: 'var(--warm-paper)',
                    margin: 0,
                    fontWeight: 400,
                    fontStyle: 'italic',
                    letterSpacing: '-0.01em',
                  }}
                >
                  &ldquo;It's not just about what we do, but how we make people feel.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Direct Banham Button to Enquire */}
            {onOpenEnquire && (
              <div style={{ marginTop: '2.5rem' }}>
                <button
                  onClick={onOpenEnquire}
                  className="btn-banham-white"
                >
                  Enquire with Rahat Khan's Office
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .founder-grid {
            grid-template-columns: 1fr !important;
          }
          .founder-content {
            padding: 3.5rem 1.75rem !important;
          }
          .signature-quote-split {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .quote-column {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid rgba(255, 255, 255, 0.15) !important;
            padding-top: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};
