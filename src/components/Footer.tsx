import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenEnquire: () => void;
  onOpenContact: () => void;
}

const CURRENT_YEAR = 2026;

export const Footer: React.FC<FooterProps> = ({ onOpenEnquire, onOpenContact }) => {

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer 
      id="contact"
      style={{
        backgroundColor: '#0A1C17', // Hive Forest Deep brand anchor
        borderTop: '1px solid rgba(182, 155, 101, 0.25)',
        paddingTop: '3.75rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        color: 'var(--warm-paper)',
      }}
    >
      <div className="container">
        {/* Upper Row: Logo, Navigation, and Enquire Button */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
          className="footer-top"
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ position: 'relative', width: '34px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 100 115" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <polygon
                  points="50 0, 100 28.8, 100 86.2, 50 115, 0 86.2, 0 28.8"
                  fill="rgba(23, 61, 51, 0.4)"
                  stroke="#B69B65"
                  strokeWidth="3.5"
                />
              </svg>
              <span style={{ 
                position: 'relative', 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.15rem', 
                fontWeight: 500, 
                color: 'var(--quiet-brass)' 
              }}>
                H
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.05rem', 
                fontWeight: 500, 
                letterSpacing: '0.08em', 
                color: 'var(--warm-paper)',
                lineHeight: 1.15
              }}>
                HIVE RK
              </span>
              <span style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.58rem', 
                letterSpacing: '0.16em', 
                color: 'var(--quiet-brass)', 
                textTransform: 'uppercase',
                fontWeight: 500,
              }}>
                ENTERPRISES
              </span>
            </div>
          </div>

          {/* Navigation Links: Manrope 12–14px medium */}
          <nav>
            <ul 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '2.25rem', 
                listStyle: 'none', 
                margin: 0, 
                padding: 0,
                flexWrap: 'wrap',
              }}
            >
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--warm-paper-dark)',
                    fontSize: 'var(--text-nav-size)',
                    letterSpacing: 'var(--text-nav-tracking)',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--quiet-brass)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--warm-paper-dark)')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('dual-showcase')}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--warm-paper-dark)',
                    fontSize: 'var(--text-nav-size)',
                    letterSpacing: 'var(--text-nav-tracking)',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--quiet-brass)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--warm-paper-dark)')}
                >
                  Businesses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--warm-paper-dark)',
                    fontSize: 'var(--text-nav-size)',
                    letterSpacing: 'var(--text-nav-tracking)',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--quiet-brass)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--warm-paper-dark)')}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--warm-paper-dark)',
                    fontSize: 'var(--text-nav-size)',
                    letterSpacing: 'var(--text-nav-tracking)',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--quiet-brass)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--warm-paper-dark)')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Outlined Enquire Button */}
          <div>
            <button
              onClick={onOpenEnquire}
              className="btn-brass-outline"
              id="footer-enquire-btn"
            >
              <span>Enquire Now</span>
              <ArrowRight size={13} className="arrow-icon" />
            </button>
          </div>
        </div>

        {/* Subtle Horizontal Divider */}
        <div 
          style={{
            height: '1px',
            width: '100%',
            backgroundColor: 'rgba(182, 155, 101, 0.2)',
            marginBottom: '1.75rem',
          }}
        />

        {/* Lower Row: Copyright & Industry Tags */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Copyright: Manrope 12px */}
          <p 
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem', 
              color: 'var(--warm-paper-subtle)', 
              margin: 0,
              fontWeight: 400,
            }}
          >
            &copy; {CURRENT_YEAR} HIVE RK Enterprises. All rights reserved.
          </p>

          {/* Categories: Manrope 11px, 0.14em tracking */}
          <p 
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-eyebrow-size)', 
              letterSpacing: 'var(--text-eyebrow-tracking)', 
              textTransform: 'uppercase', 
              color: 'var(--quiet-brass)', 
              opacity: 0.9,
              margin: 0,
              fontWeight: 500,
            }}
          >
            Hospitality / Lifestyle / Automobiles
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.75rem !important;
          }
        }
      `}</style>
    </footer>
  );
};
