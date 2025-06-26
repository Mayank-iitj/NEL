import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ConceptsSection } from './components/ConceptsSection';
import { InteractiveDemo } from './components/InteractiveDemo';
import { PipelineSection } from './components/PipelineSection';
import { ChallengesSection } from './components/ChallengesSection';
import { ApplicationsSection } from './components/ApplicationsSection';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'concepts', 'demo', 'pipeline', 'challenges', 'applications'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? 'hero' : section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation clicks
  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetId = sectionId === 'home' ? 'hero' : sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} onNavigate={handleNavigation} />
      <main>
        <Hero onNavigate={handleNavigation} />
        <ConceptsSection />
        <InteractiveDemo />
        <PipelineSection />
        <ChallengesSection />
        <ApplicationsSection onNavigate={handleNavigation} />
      </main>
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;