
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStatement } from './components/TrustStatement';
import { Services } from './components/Services';
import { HowWeWork } from './components/HowWeWork';
import { WhyVigobrand } from './components/WhyVigobrand';
import { WhoWeWorkWith } from './components/WhoWeWorkWith';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col overflow-x-hidden">
      <Header onContactClick={toggleModal} />
      
      <main className="flex-grow">
        <Hero onContactClick={toggleModal} />
        <TrustStatement />
        <Services />
        <HowWeWork />
        <WhyVigobrand />
        <WhoWeWorkWith />
        <CTA onContactClick={toggleModal} />
      </main>

      <Footer />
      
      <ContactModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default App;
