import React, { useState, useEffect } from 'react';
import { X, Search, User, ShoppingBag, Volume2, VolumeX, ArrowRight, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenEnquire: (businessCategory?: string) => void;
  isAmbiencePlaying?: boolean;
  onToggleAmbience?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenEnquire,
  isAmbiencePlaying = false,
  onToggleAmbience
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #EBEBEB',
          transition: 'all 0.3s ease',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none',
          padding: '1rem 0',
        }}
      >
        <div 
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          {/* LEFT: Banham 2-Line Menu Icon & Utility Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', flex: 1 }}>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open Navigation Menu"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: '#111413',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                fontWeight: 400,
                letterSpacing: '0.01em',
                cursor: 'pointer',
                padding: '0.2rem 0',
              }}
            >
              {/* Banham 2-Line Parallel Hamburger Icon */}
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none" stroke="#111413" strokeWidth="1.7" strokeLinecap="round">
                <line x1="0" y1="1.5" x2="18" y2="1.5" />
                <line x1="0" y1="8.5" x2="18" y2="8.5" />
              </svg>
            </button>

            <button
              onClick={() => onOpenEnquire()}
              className="banham-nav-link hidden-on-mobile"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                fontWeight: 400,
                color: '#111413',
                cursor: 'pointer',
                letterSpacing: '0.01em',
              }}
            >
              Book a Survey
            </button>

            <a
              href="tel:+919831000000"
              className="banham-nav-link hidden-on-tablet"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                fontWeight: 400,
                color: '#111413',
                letterSpacing: '0.01em',
              }}
            >
              Call Us
            </a>
          </div>

          {/* CENTER: Banham Authoritative Serif Wordmark (IvarHeadline) */}
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <a 
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.85rem',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  color: '#111413',
                  lineHeight: 1,
                  textTransform: 'uppercase',
                }}
              >
                HIVE RK
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.18em',
                  color: '#111413',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  marginTop: '2px',
                }}
              >
                ENTERPRISES
              </span>
            </a>
          </div>

          {/* RIGHT: Search, User, Bag & Audio Icons (Matches Banham Top Right) */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1.35rem', flex: 1 }}>
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              style={{
                color: '#111413',
                padding: '0.35rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Search size={18} strokeWidth={1.6} />
            </button>

            {/* VIP Client Portal / Account (Banham User Icon) */}
            <button
              onClick={() => onOpenEnquire('VIP Concierge Access')}
              aria-label="VIP Client Portal"
              title="VIP Client Portal"
              style={{
                color: '#111413',
                padding: '0.35rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <User size={18} strokeWidth={1.6} />
            </button>

            {/* Bag Icon (Banham Shopping / Reservation Bag) */}
            <button
              onClick={() => onOpenEnquire('Reservation Bag')}
              aria-label="Enquiry Bag"
              title="Reservations & Enquiries"
              style={{
                color: '#111413',
                padding: '0.35rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ShoppingBag size={18} strokeWidth={1.6} />
            </button>

            {/* Ambient Lounge Soundscape Toggle */}
            {onToggleAmbience && (
              <button
                onClick={onToggleAmbience}
                aria-label={isAmbiencePlaying ? 'Mute luxury soundscape' : 'Play ambient soundscape'}
                title={isAmbiencePlaying ? 'Mute ambience' : 'Play ambient sound'}
                style={{
                  color: isAmbiencePlaying ? 'var(--hive-forest)' : '#888E8B',
                  padding: '0.35rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {isAmbiencePlaying ? <Volume2 size={18} strokeWidth={1.6} /> : <VolumeX size={18} strokeWidth={1.6} />}
              </button>
            )}
          </div>
        </div>


        {/* Search Bar Dropdown */}
        {searchOpen && (
          <div
            style={{
              borderTop: '1px solid #EBEBEB',
              backgroundColor: '#FAF9F6',
              padding: '1rem 0',
              animation: 'fadeIn 0.2s ease',
            }}
          >
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Search size={18} style={{ color: '#777' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across The Lounge RK 2.0, The Lounge RK, Automobiles..."
                autoFocus
                style={{
                  width: '100%',
                  border: 'none',
                  backgroundColor: 'transparent',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  color: '#111',
                }}
              />
              <button onClick={() => setSearchOpen(false)} style={{ color: '#888' }}>
                <X size={18} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Banham-Style Slide-Out Navigation Drawer */}
      {menuOpen && (
        <div
          className="modal-overlay"
          onClick={() => setMenuOpen(false)}
          style={{
            zIndex: 100,
            justifyContent: 'flex-start',
            padding: 0,
            backgroundColor: 'rgba(10, 14, 12, 0.65)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '420px',
              height: '100vh',
              backgroundColor: '#FFFFFF',
              boxShadow: '4px 0 24px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2.5rem 2.25rem',
              animation: 'slideInLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              overflowY: 'auto',
            }}
          >
            <div>
              {/* Drawer Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', letterSpacing: '0.12em', color: '#111413' }}>
                    HIVE RK
                  </span>
                  <span style={{ fontSize: '0.6875rem', letterSpacing: '0.18em', color: '#111413', textTransform: 'uppercase', fontWeight: 500 }}>
                    ENTERPRISES
                  </span>
                </div>
                <button 
                  onClick={() => setMenuOpen(false)}
                  style={{ color: '#111', padding: '0.4rem', cursor: 'pointer' }}
                >
                  <X size={22} />
                </button>
              </div>

              {/* Main Navigation Links */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { label: 'Home', href: '#home', sub: 'Overview & Vision' },
                  { label: 'The Lounge RK 2.0', href: '#lounge-2-split', sub: 'Daylight dining & botanical terrace' },
                  { label: 'The Lounge RK', href: '#lounge-classic-split', sub: 'Intimate evening lounge & cocktails' },
                  { label: 'Automobiles & Fleet', href: '#automobiles-grid', sub: 'Curated luxury motors & superbikes' },
                  { label: 'About Rahat Khan', href: '#about', sub: 'Founder & Managing Director' },
                  { label: 'Concierge & Enquiries', href: '#contact', sub: 'Direct private appointments' },
                ].map((item) => (
                  <li key={item.label} style={{ borderBottom: '1px solid #F0EFEA', paddingBottom: '0.85rem' }}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      style={{ display: 'block', textDecoration: 'none' }}
                    >
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#111413', display: 'block' }}>
                        {item.label}
                      </span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: '#777C7A', display: 'block', marginTop: '2px' }}>
                        {item.sub}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Drawer Footer with Direct Booking */}
            <div style={{ paddingTop: '2rem', borderTop: '1px solid #EAE8E2', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenEnquire();
                }}
                className="btn-banham-dark"
                style={{ width: '100%' }}
              >
                <span>Book a Consultation</span>
                <ArrowRight size={14} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#555', fontSize: '0.78rem' }}>
                <Phone size={14} style={{ color: 'var(--quiet-brass)' }} />
                <span>Private Concierge: Asansol, West Bengal</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @media (max-width: 860px) {
          .hidden-on-tablet {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .hidden-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
