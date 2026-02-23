import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowDown, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, rotateX: -45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: 'power4.out',
          delay: 0.3,
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.6,
        }
      );

      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0, rotateY: -30 },
        {
          scale: 1,
          opacity: 1,
          rotateY: 0,
          duration: 1.4,
          ease: 'power4.out',
          delay: 0.8,
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 1.2,
        }
      );

      gsap.to(imageRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(titleRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="hero-new">
      <div className="spline-background">
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyl6C7c7m/scene.splinecode" />
      </div>

      <div className="hero-content-new">
        <div className="hero-text-section">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-badge"
          >
            <Sparkles className="w-4 h-4" />
            <span>Full-Stack Developer</span>
          </motion.div>

          <h1 ref={titleRef} className="hero-title-new">
            <span className="title-line">Sileshi</span>
            <span className="title-line accent">Abrham</span>
          </h1>

          <p ref={subtitleRef} className="hero-subtitle-new">
            Crafting digital experiences with modern web technologies.
            <br />
            Building scalable solutions that make an impact.
          </p>

          <div ref={ctaRef} className="hero-cta">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-primary"
              onClick={scrollToAbout}
            >
              Explore My Work
              <ArrowDown className="w-5 h-5" />
            </motion.button>
            <motion.a
              href="https://github.com/sileshidev-lab"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-secondary"
            >
              View GitHub
            </motion.a>
          </div>
        </div>

        <motion.div
          ref={imageRef}
          className="hero-image-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="image-frame">
            <img
              src="/photo_2025-12-08_05-13-07.jpg"
              alt="Sileshi Abrham"
              className="hero-portrait"
            />
            <div className="image-glow" />
          </div>
          
          <motion.div
            className="tech-badge badge-1"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            React
          </motion.div>
          <motion.div
            className="tech-badge badge-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            Node.js
          </motion.div>
          <motion.div
            className="tech-badge badge-3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Python
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="scroll-line" />
        <span>Scroll to explore</span>
      </motion.div>
    </div>
  );
};

export default Hero;
