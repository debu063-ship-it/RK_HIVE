import React from 'react';
import { X, ArrowRight, Clock, MapPin, Sparkles, Check } from 'lucide-react';
import type { BusinessItem } from './BusinessShowcase';

interface BusinessDetailModalProps {
  business: BusinessItem | null;
  onClose: () => void;
  onBookNow: (businessName: string) => void;
}

export const BusinessDetailModal: React.FC<BusinessDetailModalProps> = ({
  business,
  onClose,
  onBookNow,
}) => {
  if (!business) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '760px',
          backgroundColor: '#0F2620', // Hive Forest container
          border: '1px solid rgba(182, 155, 101, 0.35)',
          borderRadius: '2px',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)',
          position: 'relative',
          overflow: 'hidden',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with Image */}
        <div 
          style={{
            position: 'relative',
            height: '270px',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: '#0D100F',
            flexShrink: 0,
          }}
        >
          <img
            src={business.image}
            alt={business.tag}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 45%, rgba(15, 38, 32, 0.92) 100%)',
            }}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(13, 16, 15, 0.75)',
              border: '1px solid rgba(182, 155, 101, 0.35)',
              color: '#B69B65',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            <X size={17} />
          </button>

          {/* Banner Text */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.75rem',
              left: '2rem',
              right: '2rem',
              zIndex: 5,
            }}
          >
            {business.tag && (
              <span 
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-eyebrow-size)',
                  letterSpacing: 'var(--text-eyebrow-tracking)',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: business.theme.accentColor,
                  display: 'block',
                  marginBottom: '0.35rem',
                }}
              >
                {business.tag}
              </span>
            )}
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                color: 'var(--warm-paper)',
                margin: 0,
                lineHeight: 1.15,
                fontWeight: 400,
              }}
            >
              {business.headline}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div style={{ padding: '2rem 2.25rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {/* Tagline & Experience Description */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                color: '#B69B65', // Quiet Brass
                fontWeight: 400,
                letterSpacing: '0.04em',
                marginBottom: '0.65rem',
              }}
            >
              {business.details.tagline}
            </h4>
            <p
              style={{
                color: '#E6E1D3',
                fontSize: '0.96rem',
                lineHeight: 1.75,
                fontWeight: 400,
              }}
            >
              {business.details.experience}
            </p>
          </div>

          {/* Highlights & Curated Features */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <Sparkles size={15} color="#B69B65" />
              <span style={{ fontSize: '0.74rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B69B65' }}>
                Signature Features & Offerings
              </span>
            </div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.85rem',
              }}
            >
              {business.details.features.map((feat, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#16352E',
                    border: '1px solid rgba(182, 155, 101, 0.2)',
                    padding: '0.85rem 1rem',
                    borderRadius: '1px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <Check size={14} color="#B69B65" />
                  <span style={{ fontSize: '0.85rem', color: '#F3F0E7' }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Hours metadata */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#16352E',
              border: '1px solid rgba(182, 155, 101, 0.2)',
              borderRadius: '1px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
            }}
            className="modal-meta-grid"
          >
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Clock size={17} color="#B69B65" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69B65' }}>
                  Operational Timings
                </span>
                <span style={{ fontSize: '0.86rem', color: '#E6E1D3' }}>
                  {business.details.hours}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <MapPin size={17} color="#B69B65" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69B65' }}>
                  Location Address
                </span>
                <span style={{ fontSize: '0.86rem', color: '#E6E1D3' }}>
                  {business.details.location}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem',
              paddingTop: '0.5rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {business.sideLabels.map((lbl, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#C8C2B3',
                    padding: '0.2rem 0.5rem',
                    backgroundColor: 'rgba(243, 240, 231, 0.06)',
                    borderRadius: '1px',
                  }}
                >
                  {lbl}
                </span>
              ))}
            </div>

            <button
              onClick={() => {
                onClose();
                onBookNow(business.name);
              }}
              className="btn-brass-outline"
              style={{ padding: '0.8rem 1.6rem' }}
            >
              <span>Make Private Reservation</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .modal-meta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
