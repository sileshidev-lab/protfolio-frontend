import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef(null);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const sections = ['hero', 'about', 'projects', 'contact'];
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setCurrentSection(section),
        onEnterBack: () => setCurrentSection(section),
      });
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, {
        offset: 0,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <div className="app">
      <div className="noise-overlay" />
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <div className="gradient-orb orb-3" />
      
      <Navigation 
        currentSection={currentSection} 
        onNavigate={scrollToSection}
      />
      
      <main className="main-content">
        <section id="hero" className="section-wrapper">
          <Hero />
        </section>
        
        <section id="about" className="section-wrapper">
          <About />
        </section>
        
        <section id="projects" className="section-wrapper">
          <Projects />
        </section>
        
        <section id="contact" className="section-wrapper">
          <Contact />
        </section>
        
        <Footer />
      </main>
      
      <div className="page-indicator">
        {['hero', 'about', 'projects', 'contact'].map((section, index) => (
          <button
            key={section}
            className={`indicator-dot ${currentSection === section ? 'active' : ''}`}
            onClick={() => scrollToSection(section)}
            aria-label={`Go to ${section} section`}
          >
            <span className="indicator-number">{String(index + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App
