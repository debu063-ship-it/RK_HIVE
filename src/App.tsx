import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatementDivider } from './components/StatementDivider';
import { DualShowcase } from './components/DualShowcase';
import { ExploreGrid } from './components/ExploreGrid';
import type { BusinessItem } from './components/BusinessShowcase';
import { FounderSection } from './components/FounderSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EnquireModal } from './components/EnquireModal';
import { BusinessDetailModal } from './components/BusinessDetailModal';
import { ContactModal } from './components/ContactModal';
import { toggleAmbienceSound } from './utils/ambience';

export function App() {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [enquireBusiness, setEnquireBusiness] = useState<string>('The Lounge RK 2.0');
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessItem | null>(null);
  const [isAmbiencePlaying, setIsAmbiencePlaying] = useState(false);

  // Handlers
  const handleOpenEnquire = (businessCategory?: string) => {
    if (businessCategory) {
      setEnquireBusiness(businessCategory);
    }
    setEnquireOpen(true);
  };

  const handleSelectBusiness = (business: BusinessItem) => {
    setSelectedBusiness(business);
  };

  const handleScrollToExplore = () => {
    const el = document.getElementById('dual-showcase');
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  const handleToggleAmbience = () => {
    const newState = toggleAmbienceSound(isAmbiencePlaying);
    setIsAmbiencePlaying(newState);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111413] selection:bg-[#B69B65] selection:text-[#FFFFFF]">
      {/* Skip to Main Link for Accessibility */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#B69B65] focus:text-[#0D100F] focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* 1. Banham-Style Sticky Navigation Header */}
      <Navbar 
        onOpenEnquire={() => handleOpenEnquire()}
        isAmbiencePlaying={isAmbiencePlaying}
        onToggleAmbience={handleToggleAmbience}
      />

      {/* Main Landmark */}
      <main id="main-content">
        {/* 2. Banham Hero: Centered Headline + White Action Button + Floating Concierge Pill */}
        <Hero 
          onExploreClick={handleScrollToExplore}
          onOpenEnquire={() => handleOpenEnquire()}
        />

        {/* 3. Banham Heritage Statement Section (Screenshot 2: 'Curated with Passion. Driven by Purpose.') */}
        <StatementDivider />

        {/* 4. Banham 50/50 Dual Panoramic Feature Cards (Screenshots 3 & 5: 'Signature Locks' & 'Bespoke Doors' Layout) */}
        <DualShowcase onSelectBusiness={handleSelectBusiness} />

        {/* 5. Banham 'Explore Banham' 3-Column Enterprise Showcase (Screenshots 1 & 3: Keyholding, Alarms, Safes Grid) */}
        <ExploreGrid onSelectBusiness={handleSelectBusiness} />

        {/* 6. Banham Split Story / Leadership Banner (Screenshot 1 Bottom: 'Great British Brands' Layout) */}
        <FounderSection onOpenEnquire={() => handleOpenEnquire('Rahat Khan Concierge Inquiry')} />

        {/* 7. Closing Vision Panoramic Banner */}
        <FinalCTA onExploreAll={handleScrollToExplore} />
      </main>

      {/* 8. Banham Enterprise Footer */}
      <Footer 
        onOpenEnquire={() => handleOpenEnquire()}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Interactive Modals */}
      <EnquireModal 
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        defaultBusiness={enquireBusiness}
      />

      <BusinessDetailModal 
        business={selectedBusiness}
        onClose={() => setSelectedBusiness(null)}
        onBookNow={(businessName) => {
          setSelectedBusiness(null);
          handleOpenEnquire(businessName);
        }}
      />

      <ContactModal 
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        onOpenEnquire={() => {
          setContactOpen(false);
          handleOpenEnquire();
        }}
      />
    </div>
  );
}

export default App;
