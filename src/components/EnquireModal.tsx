import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, MessageCircle, Copy, Check } from 'lucide-react';

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
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (defaultBusiness) {
      setSelectedBusiness(defaultBusiness);
    }
  }, [defaultBusiness]);

  // Lock body scroll and register Escape key for accessibility
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

  // Real-time validations
  const isNameValid = formData.name.trim().length >= 2;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
  const isPhoneValid = formData.phone.trim().length >= 8;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true });
    if (!isNameValid || !isEmailValid || !isPhoneValid) return;

    const ref = `HIVE-RK-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceId(ref);
    setIsSubmitted(true);
  };

  const handleCopyReference = () => {
    if (!referenceId) return;
    navigator.clipboard.writeText(referenceId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setReferenceId('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      guestsOrInterest: '',
      message: '',
    });
    setTouched({});
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello HIVE RK Concierge, I have submitted a private enquiry (Ref: ${referenceId}) for ${selectedBusiness}.\nName: ${formData.name}\nPhone: ${formData.phone}`
  );
  const whatsappUrl = `https://wa.me/919831000000?text=${whatsappMessage}`;

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquire-modal-title"
    >
      <div 
        className="enquire-dialog-box"
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
        {/* Mobile Drag Bar */}
        <div className="mobile-grab-bar" />

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
              id="enquire-modal-title"
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
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div 
                style={{
                  width: '64px',
                  height: '64px',
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
                <CheckCircle size={32} />
              </div>
              <h4 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.85rem',
                  color: '#F3F0E7',
                  marginBottom: '0.75rem',
                  fontWeight: 400,
                }}
              >
                Enquiry Confirmed
              </h4>
              <p 
                style={{
                  color: '#E6E1D3',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  maxWidth: '460px',
                  margin: '0 auto 1.5rem',
                }}
              >
                Thank you for your interest in <strong>{selectedBusiness}</strong>. Your private enquiry has been logged with executive concierge dispatch.
              </p>

              {/* Reference Number Card */}
              <div
                style={{
                  backgroundColor: '#16352E',
                  border: '1px solid rgba(182, 155, 101, 0.35)',
                  borderRadius: '2px',
                  padding: '1rem 1.25rem',
                  maxWidth: '380px',
                  margin: '0 auto 1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div style={{ textAlign: 'left' }}>
                  <span style={{ display: 'block', fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69B65' }}>
                    Concierge Dossier Ref
                  </span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: '#FFFFFF', letterSpacing: '0.05em' }}>
                    {referenceId}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyReference}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 0.75rem',
                    fontSize: '0.75rem',
                    color: '#B69B65',
                    border: '1px solid rgba(182, 155, 101, 0.3)',
                    borderRadius: '1px',
                    cursor: 'pointer',
                  }}
                  title="Copy Reference"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '380px', margin: '0 auto' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.65rem',
                    padding: '0.85rem 1.5rem',
                    backgroundColor: '#1B4D3E',
                    color: '#FFFFFF',
                    border: '1px solid #2B6D59',
                    borderRadius: '1px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <MessageCircle size={17} />
                  <span>Connect with Concierge on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-brass-outline"
                  style={{ padding: '0.75rem 1.5rem' }}
                >
                  <span>Return to Website</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Select Business */}
              <div>
                <label 
                  style={{ 
                    display: 'block', 
                    fontSize: '0.6875rem', 
                    letterSpacing: '0.15em', 
                    textTransform: 'uppercase', 
                    color: '#B69B65', 
                    marginBottom: '0.45rem',
                    fontWeight: 500,
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
                  <option value="The Lounge RK 2.0">The Lounge RK 2.0 (Contemporary Hospitality & Terrace)</option>
                  <option value="The Lounge RK">The Lounge RK (Intimate Nightlife & Cocktails)</option>
                  <option value="HIVE RK Enterprise Automobiles">HIVE RK Enterprise Automobiles (Curated Luxury Fleet)</option>
                  <option value="HIVE RK Enterprises General">HIVE RK Enterprises (Direct Executive Liaison)</option>
                </select>
              </div>

              {/* Name & Email Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-two-col">
                <div>
                  <label 
                    style={{ 
                      display: 'block', 
                      fontSize: '0.6875rem', 
                      letterSpacing: '0.15em', 
                      textTransform: 'uppercase', 
                      color: '#B69B65', 
                      marginBottom: '0.45rem',
                      fontWeight: 500,
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: '#16352E',
                      border: touched.name && !isNameValid ? '1px solid #E57373' : '1px solid rgba(182, 155, 101, 0.3)',
                      color: '#F3F0E7',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      borderRadius: '1px',
                      outline: 'none',
                    }}
                  />
                  {touched.name && !isNameValid && (
                    <span style={{ fontSize: '0.6875rem', color: '#FFB4AB', display: 'block', marginTop: '3px' }}>
                      Please provide your full name.
                    </span>
                  )}
                </div>

                <div>
                  <label 
                    style={{ 
                      display: 'block', 
                      fontSize: '0.6875rem', 
                      letterSpacing: '0.15em', 
                      textTransform: 'uppercase', 
                      color: '#B69B65', 
                      marginBottom: '0.45rem',
                      fontWeight: 500,
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contact@domain.com"
                    value={formData.email}
                    onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: '#16352E',
                      border: touched.email && !isEmailValid ? '1px solid #E57373' : '1px solid rgba(182, 155, 101, 0.3)',
                      color: '#F3F0E7',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      borderRadius: '1px',
                      outline: 'none',
                    }}
                  />
                  {touched.email && !isEmailValid && (
                    <span style={{ fontSize: '0.6875rem', color: '#FFB4AB', display: 'block', marginTop: '3px' }}>
                      Please enter a valid email address.
                    </span>
                  )}
                </div>
              </div>

              {/* Phone & Date / Interest */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-two-col">
                <div>
                  <label 
                    style={{ 
                      display: 'block', 
                      fontSize: '0.6875rem', 
                      letterSpacing: '0.15em', 
                      textTransform: 'uppercase', 
                      color: '#B69B65', 
                      marginBottom: '0.45rem',
                      fontWeight: 500,
                    }}
                  >
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98310 00000"
                    value={formData.phone}
                    onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: '#16352E',
                      border: touched.phone && !isPhoneValid ? '1px solid #E57373' : '1px solid rgba(182, 155, 101, 0.3)',
                      color: '#F3F0E7',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      borderRadius: '1px',
                      outline: 'none',
                    }}
                  />
                  {touched.phone && !isPhoneValid && (
                    <span style={{ fontSize: '0.6875rem', color: '#FFB4AB', display: 'block', marginTop: '3px' }}>
                      Please enter a valid contact number.
                    </span>
                  )}
                </div>

                <div>
                  <label 
                    style={{ 
                      display: 'block', 
                      fontSize: '0.6875rem', 
                      letterSpacing: '0.15em', 
                      textTransform: 'uppercase', 
                      color: '#B69B65', 
                      marginBottom: '0.45rem',
                      fontWeight: 500,
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
                    fontSize: '0.6875rem', 
                    letterSpacing: '0.15em', 
                    textTransform: 'uppercase', 
                    color: '#B69B65', 
                    marginBottom: '0.45rem',
                    fontWeight: 500,
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
                  fontSize: '0.875rem',
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
        .mobile-grab-bar {
          display: none;
        }
        @media (max-width: 640px) {
          .modal-overlay {
            align-items: flex-end !important;
            padding: 0 !important;
          }
          .enquire-dialog-box {
            max-height: 94vh !important;
            border-radius: 16px 16px 0 0 !important;
            border-bottom: none !important;
            animation: slideUpBottom 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          }
          .mobile-grab-bar {
            display: block;
            width: 44px;
            height: 4px;
            border-radius: 2px;
            background-color: rgba(182, 155, 101, 0.4);
            margin: 0.6rem auto 0;
          }
          .form-two-col {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes slideUpBottom {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
