import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onOpenEnquire?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenEnquire }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home"
      aria-label="HIVE RK Enterprises Hero"
      style={{
        position: 'relative',
        minHeight: '88vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#111413',
        paddingTop: '5rem',
      }}
    >
      {/* Background Video: Ambient Cinematic Loop */}
      <div 
        className={`hero-image-settle ${isLoaded ? 'is-settled' : ''}`}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          backgroundColor: '#111413',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero.jpg"
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

      {/* Subtle Dark Vignette & Gradient for Pristine Editorial Readability */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: `
            linear-gradient(180deg, 
              rgba(10, 14, 13, 0.45) 0%, 
              rgba(10, 14, 13, 0.65) 50%, 
              rgba(10, 14, 13, 0.85) 100%
            )
          `,
        }}
      />

      {/* Center-Aligned Content (Banham Template Style) */}
      <div 
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          paddingTop: '4rem',
          paddingBottom: '4rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {/* Main Headline in Cormorant Garamond Serif */}
          <h1 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.75rem, 5.8vw, 4.85rem)',
              lineHeight: 1.05,
              fontWeight: 400,
              color: '#FFFFFF',
              marginBottom: '1.65rem',
              letterSpacing: '-0.015em',
              textShadow: '0 3px 20px rgba(0, 0, 0, 0.6)',
            }}
          >
            <span className="mask-reveal-wrap">
              <span 
                className={`mask-reveal-item ${isLoaded ? 'is-revealed' : ''}`}
                style={{ transitionDelay: '0.2s' }}
              >
                Curating Exceptional Living
              </span>
            </span>
          </h1>

          {/* Centered Subtitle Paragraph (Banham Style) */}
          <p 
            className={`reveal-fade-up ${isLoaded ? 'is-revealed' : ''}`}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
              color: 'rgba(255, 255, 255, 0.94)',
              lineHeight: 1.68,
              maxWidth: '56ch',
              margin: '0 auto 2.5rem',
              fontWeight: 400,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              textWrap: 'pretty',
              transitionDelay: '0.45s',
            }}
          >
            To celebrate the unified vision of HIVE RK Enterprises, we curate progressive open-air dining at The Lounge RK 2.0, intimate nightlife at The Lounge RK, and bespoke automotive engineering.
          </p>

          {/* Banham-Style Solid White Rectangular Button */}
          <div
            className={`reveal-fade-up ${isLoaded ? 'is-revealed' : ''}`}
            style={{ transitionDelay: '0.65s' }}
          >
            <button
              onClick={onExploreClick}
              className="btn-banham-white"
              id="hero-explore-cta"
            >
              Explore Our Businesses
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Button Bottom-Right (Banham 'Book a Free Survey' Pill) */}
      {onOpenEnquire && (
        <button
          onClick={onOpenEnquire}
          className="banham-floating-pill"
          aria-label="Enquire with Concierge"
        >
          <span>Enquire with Concierge</span>
          <Calendar size={16} style={{ color: 'var(--quiet-brass)' }} />
        </button>
      )}
    </section>
  );
};
