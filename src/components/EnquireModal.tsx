import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBusiness?: string;
}

export const EnquireModal: React.FC<EnquireModalProps> = ({ 
  isOpen, 
  onClose,
  defaultBusiness = 'The Lounge RK 2.0'
}) => {
  const [selectedBusiness, setSelectedBusiness] = useState(defaultBusiness);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guestsOrInterest: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      guestsOrInterest: '',
      message: '',
    });
    onClose();
  };

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '620px',
          backgroundColor: '#0F2620', // Hive Forest Deep container
          border: '1px solid rgba(182, 155, 101, 0.35)',
          borderRadius: '2px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85)',
          position: 'relative',
          overflow: 'hidden',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
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
              PRIVATE CONCIERGE
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
              Enterprise Enquiry
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

        {/* Modal Body */}
        <div style={{ padding: '2rem', overflowY: 'auto', backgroundColor: '#0F2620' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
              <div 
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(182, 155, 101, 0.15)',
                  border: '1px solid #B69B65',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: '#B69B65',
                }}
              >
                <CheckCircle size={30} />
              </div>
              <h4 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.8rem',
                  color: '#F3F0E7',
                  marginBottom: '0.75rem',
                  fontWeight: 400,
                }}
              >
                Enquiry Received
              </h4>
              <p 
                style={{
                  color: '#E6E1D3',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  maxWidth: '440px',
                  margin: '0 auto 2rem',
                }}
              >
                Thank you for your interest in <strong>{selectedBusiness}</strong>. Our private liaison concierge will review your details and connect with you discreetly.
              </p>
              <button
                onClick={handleReset}
                className="btn-brass-outline"
                style={{ padding: '0.75rem 2rem' }}
              >
                Return to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Select Business */}
              <div>
                <label 
                  style={{ 
                    display: 'block', 
                    fontSize: '0.72rem', 
                    letterSpacing: '0.15em', 
                    textTransform: 'uppercase', 
                    color: '#B69B65', 
                    marginBottom: '0.45rem' 
                  }}
                >
                  Select Business / Experience
                </label>
                <select
                  value={selectedBusiness}
                  onChange={(e) => setSelectedBusiness(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#16352E',
                    border: '1px solid rgba(182, 155, 101, 0.3)',
                    color: '#F3F0E7',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    borderRadius: '1px',
                    outline: 'none',
                  }}
                >
                  <option value="The Lounge RK 2.0">The Lounge RK 2.0 (Contemporary Hospitality)</option>
                  <option value="The Lounge RK">The Lounge RK (Intimate Escape & Private Dining)</option>
                  <option value="HIVE RK Enterprise Automobiles">HIVE RK Enterprise Automobiles (Luxury Fleet)</option>
                  <option value="HIVE RK Enterprises General">HIVE RK Enterprises (Partnership / General)</option>
                </select>
              </div>

              {/* Name & Email Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-two-col">
                <div>
                  <label 
                    style={{ 
                      display: 'block', 
                      fontSize: '0.72rem', 
                      letterSpacing: '0.15em', 
                      textTransform: 'uppercase', 
                      color: '#B69B65', 
                      marginBottom: '0.45rem' 
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: '#16352E',
                      border: '1px solid rgba(182, 155, 101, 0.3)',
                      color: '#F3F0E7',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      borderRadius: '1px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label 
                    style={{ 
                      display: 'block', 
                      fontSize: '0.72rem', 
                      letterSpacing: '0.15em', 
                      textTransform: 'uppercase', 
                      color: '#B69B65', 
                      marginBottom: '0.45rem' 
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contact@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: '#16352E',
                      border: '1px solid rgba(182, 155, 101, 0.3)',
                      color: '#F3F0E7',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      borderRadius: '1px',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Phone & Date / Interest */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-two-col">
                <div>
                  <label 
                    style={{ 
                      display: 'block', 
                      fontSize: '0.72rem', 
                      letterSpacing: '0.15em', 
                      textTransform: 'uppercase', 
                      color: '#B69B65', 
                      marginBottom: '0.45rem' 
                    }}
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: '#16352E',
                      border: '1px solid rgba(182, 155, 101, 0.3)',
                      color: '#F3F0E7',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      borderRadius: '1px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label 
                    style={{ 
                      display: 'block', 
                      fontSize: '0.72rem', 
                      letterSpacing: '0.15em', 
                      textTransform: 'uppercase', 
                      color: '#B69B65', 
                      marginBottom: '0.45rem' 
                    }}
                  >
                    Party Size / Model of Interest
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 4 Guests / Executive Sedan"
                    value={formData.guestsOrInterest}
                    onChange={(e) => setFormData({ ...formData, guestsOrInterest: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: '#16352E',
                      border: '1px solid rgba(182, 155, 101, 0.3)',
                      color: '#F3F0E7',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      borderRadius: '1px',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label 
                  style={{ 
                    display: 'block', 
                    fontSize: '0.72rem', 
                    letterSpacing: '0.15em', 
                    textTransform: 'uppercase', 
                    color: '#B69B65', 
                    marginBottom: '0.45rem' 
                  }}
                >
                  Special Requests / Inquiries
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any dining preferences, dates, or specific automotive requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#16352E',
                    border: '1px solid rgba(182, 155, 101, 0.3)',
                    color: '#F3F0E7',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    borderRadius: '1px',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              {/* Privacy badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#C8C2B3', fontSize: '0.75rem' }}>
                <ShieldCheck size={16} color="#B69B65" />
                <span>Confidential concierge request • All inquiries are handled with strict privacy.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-brass-outline"
                style={{
                  width: '100%',
                  padding: '0.95rem 1.5rem',
                  fontSize: '0.95rem',
                  marginTop: '0.5rem',
                }}
              >
                <span>Submit Private Enquiry</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
