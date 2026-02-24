import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline";
import NeuralNetwork from "./NeuralNetwork";

gsap.registerPlugin(ScrollTrigger);

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const SplitReveal = ({ topContent, bottomContent, middleContent }) => {
  const sectionRef = useRef(null);
  const topPanelRef = useRef(null);
  const bottomPanelRef = useRef(null);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [splineError, setSplineError] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const topPanel = topPanelRef.current;
    const bottomPanel = bottomPanelRef.current;

    if (!section || !topPanel || !bottomPanel) return;

    const ctx = gsap.context(() => {
      gsap.to(topPanel, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
        },
      });

      gsap.to(bottomPanel, {
        yPercent: 100,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative h-[200vh] bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background - Spline 3D or NeuralNetwork fallback */}
        <div className="absolute inset-0 z-0">
          {!splineError ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: splineLoaded ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="w-full h-full"
            >
              <Spline
                scene="https://prod.spline.design/Jb6rPXssj6abNfmi/scene.splinecode"
                onLoad={() => setSplineLoaded(true)}
                onError={() => setSplineError(true)}
                className="w-full h-full"
              />
            </motion.div>
          ) : null}
          
          {/* Fallback NeuralNetwork - always visible behind or when Spline fails */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${splineLoaded && !splineError ? 'opacity-0' : 'opacity-100'}`}>
            <NeuralNetwork />
          </div>
        </div>

        {/* Middle Content */}
        {middleContent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ...transition, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute inset-0 z-10 flex items-center justify-center"
          >
            <div className="text-center px-6 max-w-4xl">
              <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">
                {topContent.subtitle} · {bottomContent.subtitle}
              </p>
              <h2 className="text-black text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
                {topContent.title} + {bottomContent.title}
              </h2>
              <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold mt-6 mb-3">
                {middleContent.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                {middleContent.description}
              </p>
            </div>
          </motion.div>
        )}

        {/* Top Panel - Slides up on scroll */}
        <div
          ref={topPanelRef}
          className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white via-white/95 to-transparent z-20 flex items-end justify-center pb-12 will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center px-4 sm:px-6 max-w-3xl"
          >
            <p className="text-gray-500 text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3">
              {topContent.subtitle}
            </p>
            <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
              {topContent.title}
            </h2>
          </motion.div>
        </div>

        {/* Bottom Panel */}
        <div
          ref={bottomPanelRef}
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white via-white/95 to-transparent z-20 flex items-start justify-center pt-12 will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center px-4 sm:px-6 max-w-3xl"
          >
            <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
              {bottomContent.title}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm tracking-widest uppercase mt-2 sm:mt-3">
              {bottomContent.subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SplitReveal;
