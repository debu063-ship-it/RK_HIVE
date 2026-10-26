import React, { useEffect } from 'react';
import { X, Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquire: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onOpenEnquire }) => {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="contact-dialog-box"
        style={{
          width: '100%',
          maxWidth: '640px',
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
        {/* Header */}
        <div
          style={{
            padding: '1.75rem 2rem 1.25rem',
            borderBottom: '1px solid rgba(182, 155, 101, 0.22)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#0A1C17',
          }}
        >
          <div>
            <span 
              style={{ 
                margin: 0, 
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-eyebrow-size)', 
                letterSpacing: 'var(--text-eyebrow-tracking)',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: 'var(--quiet-brass)',
                display: 'block',
              }}
            >
              DIRECT COMMUNICATION
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.65rem',
                color: 'var(--warm-paper)',
                margin: '0.2rem 0 0',
                fontWeight: 400,
              }}
            >
              Contact & Concierge
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#B69B65',
              border: '1px solid rgba(182, 155, 101, 0.25)',
              backgroundColor: 'rgba(15, 38, 32, 0.6)',
              cursor: 'pointer',
            }}
          >
            <X size={17} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.75rem', backgroundColor: '#0F2620' }}>
          <p style={{ color: '#E6E1D3', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
            Connect with the executive office of <strong>HIVE RK ENTERPRISES</strong> for hospitality reservations, private lounge buyouts, or luxury automotive acquisitions.
          </p>

          {/* Contact Details List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Concierge Email */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1.2rem',
                backgroundColor: '#16352E',
                border: '1px solid rgba(182, 155, 101, 0.2)',
                borderRadius: '1px',
              }}
            >
              <Mail size={19} color="#B69B65" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69B65', marginBottom: '0.2rem' }}>
                  Private Concierge Liaison
                </span>
                <span style={{ fontSize: '0.95rem', color: '#F3F0E7', fontWeight: 400 }}>
                  concierge@hiverkglobal.com <span style={{ fontSize: '0.75rem', color: '#C8C2B3' }}>(Placeholder)</span>
                </span>
              </div>
            </div>

            {/* Direct Line */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1.2rem',
                backgroundColor: '#16352E',
                border: '1px solid rgba(182, 155, 101, 0.2)',
                borderRadius: '1px',
              }}
            >
              <Phone size={19} color="#B69B65" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69B65', marginBottom: '0.2rem' }}>
                  Direct Telephone & WhatsApp
                </span>
                <span style={{ fontSize: '0.95rem', color: '#F3F0E7', fontWeight: 400 }}>
                  +1 (800) 555-HIVE <span style={{ fontSize: '0.75rem', color: '#C8C2B3' }}>(Placeholder)</span>
                </span>
              </div>
            </div>

            {/* Headquarters */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1.2rem',
                backgroundColor: '#16352E',
                border: '1px solid rgba(182, 155, 101, 0.2)',
                borderRadius: '1px',
              }}
            >
              <MapPin size={19} color="#B69B65" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69B65', marginBottom: '0.2rem' }}>
                  Executive Corporate Headquarters
                </span>
                <span style={{ fontSize: '0.95rem', color: '#F3F0E7' }}>
                  HIVE RK Tower, Financial & Lifestyle Waterfront District <span style={{ fontSize: '0.75rem', color: '#C8C2B3' }}>(Placeholder)</span>
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#C8C2B3', fontSize: '0.75rem' }}>
            <ShieldCheck size={16} color="#B69B65" />
            <span>All corporate contact details above are placeholders designated for production configuration.</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenEnquire();
            }}
            className="btn-brass-outline"
            style={{ width: '100%', padding: '0.9rem' }}
          >
            <span>Proceed to Dedicated Enquiry Form</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .modal-overlay {
            align-items: flex-end !important;
            padding: 0 !important;
          }
          .contact-dialog-box {
            max-height: 94vh !important;
            border-radius: 16px 16px 0 0 !important;
            border-bottom: none !important;
            animation: slideUpBottom 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          }
        }
      `}</style>
    </div>
  );
};
