import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitReveal = ({ topContent, bottomContent, middleContent }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Simple fade animation without scroll-jacking
      gsap.fromTo(
        section.querySelector(".split-content"),
        { opacity: 0.8, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative h-screen bg-white overflow-hidden">
      <div className="split-content absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl">
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">
            {topContent.subtitle} · {bottomContent.subtitle}
          </p>
          <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {topContent.title} + {bottomContent.title}
          </h2>
          {middleContent && (
            <>
              <h3 className="text-black text-2xl sm:text-3xl font-bold mt-6 mb-3">
                {middleContent.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                {middleContent.description}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SplitReveal;
