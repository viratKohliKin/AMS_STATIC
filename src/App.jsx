import React, { useState } from 'react';
import { companyConfig } from './config/company';
import EnhancedHeader from './components/EnhancedHeader';
import EnhancedHero from './components/EnhancedHero';
import WelcomeMarquee from './components/WelcomeMarquee';
import About from './components/About';
import VisionMission from './components/VisionMission';
import TrustBadges from './components/TrustBadges';
import EnhancedProductCategories from './components/EnhancedProductCategories';
import FeaturedProducts from './components/FeaturedProducts';
import Certifications from './components/Certifications';
import ReviewsCarousel from './components/ReviewsCarousel';
import LocationMap from './components/LocationMap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingButtons from './components/FloatingButtons';
import ContactPage from './components/ContactPage';
import ServicesSection from './components/ServicesSection';
import AuthModal from './components/AuthModal';
import ProfilePage from './components/ProfilePage';
import { useHeaderHeight } from './hooks/useHeaderHeight';
import ShippingPolicy from "./components/policies/ShippingPolicy";
import RefundPolicy from "./components/policies/RefundPolicy";
import PaymentPolicy from "./components/policies/PaymentPolicy";
import PrivacyPolicy from "./components/policies/PrivacyPolicy";
import TermsConditions from "./components/policies/TermsConditions";
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  useHeaderHeight();

  // Home
  const renderHomePage = () => (
    <>
      <EnhancedHeader 
        company={companyConfig} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        onNavigate={setCurrentPage}
      />

      <WelcomeMarquee />
      <EnhancedHero company={companyConfig} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TrustBadges />
      <About company={companyConfig} />
      <VisionMission company={companyConfig} />
      <ServicesSection />

      <section id="products" className="section light-bg">
        <div className="container">
          <EnhancedProductCategories />
          <FeaturedProducts />
        </div>
      </section>

      <ReviewsCarousel />
      <LocationMap />
      <Contact company={companyConfig} />
      <Footer company={companyConfig} onNavigate={setCurrentPage} />
      <FloatingButtons />
      <WhatsAppButton />
    </>
  );

  // Contact
  const renderContactPage = () => (
    <>
      <EnhancedHeader company={companyConfig} searchQuery={searchQuery} setSearchQuery={setSearchQuery} onNavigate={setCurrentPage} />
      <ContactPage onBack={() => setCurrentPage('home')} />
      <Footer company={companyConfig} onNavigate={setCurrentPage} />
      <WhatsAppButton />
    </>
  );

  // Profile Page
  const renderProfilePage = () => (
    <>
      <EnhancedHeader company={companyConfig} searchQuery={searchQuery} setSearchQuery={setSearchQuery} onNavigate={setCurrentPage} />
      <ProfilePage onBack={() => setCurrentPage('home')} />
      <Footer company={companyConfig} onNavigate={setCurrentPage} />
      <WhatsAppButton />
    </>
  );
  // Policy pages
  const renderShippingPolicy = () => (
    <>
      <EnhancedHeader company={companyConfig} onNavigate={setCurrentPage} />
      <ShippingPolicy onBack={() => setCurrentPage('home')} />
      <Footer company={companyConfig} onNavigate={setCurrentPage} />
    </>
  );

  const renderRefundPolicy = () => (
    <>
      <EnhancedHeader company={companyConfig} onNavigate={setCurrentPage} />
      <RefundPolicy onBack={() => setCurrentPage('home')} />
      <Footer company={companyConfig} onNavigate={setCurrentPage} />
    </>
  );

  const renderPaymentPolicy = () => (
    <>
      <EnhancedHeader company={companyConfig} onNavigate={setCurrentPage} />
      <PaymentPolicy onBack={() => setCurrentPage('home')} />
      <Footer company={companyConfig} onNavigate={setCurrentPage} />
    </>
  );
  const renderPrivacyPolicy = () => (
    <>
      <EnhancedHeader company={companyConfig} onNavigate={setCurrentPage} />
      <PrivacyPolicy onBack={() => setCurrentPage('home')} />
      <Footer company={companyConfig} onNavigate={setCurrentPage} />
    </>
  );

  const renderTermsConditions = () => (
    <>
      <EnhancedHeader company={companyConfig} onNavigate={setCurrentPage} />
      <TermsConditions onBack={() => setCurrentPage('home')} />
      <Footer company={companyConfig} onNavigate={setCurrentPage} />
    </>
  );


  return (
    <div className="App">
      <AuthModal />

      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'contact' && renderContactPage()}
      {currentPage === 'profile' && renderProfilePage()}
      {currentPage === 'shipping-policy' && renderShippingPolicy()}
      {currentPage === 'refund-policy' && renderRefundPolicy()}
      {currentPage === 'payment-policy' && renderPaymentPolicy()}
      {currentPage === 'privacy-policy' && renderPrivacyPolicy()}
      {currentPage === 'terms' && renderTermsConditions()}

    </div>
  );
}

export default App;
