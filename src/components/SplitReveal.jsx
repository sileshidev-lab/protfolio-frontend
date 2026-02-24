import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitReveal = ({ topContent, bottomContent, middleContent }) => {
  const sectionRef = useRef(null);
  const topPanelRef = useRef(null);
  const bottomPanelRef = useRef(null);

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
    <div ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Middle Content - Hidden behind panels initially */}
        {middleContent && (
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="text-center px-6 max-w-4xl">
              <h3 className="text-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                {middleContent.title}
              </h3>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                {middleContent.description}
              </p>
            </div>
          </div>
        )}

        {/* Top Panel - Slides up on scroll */}
        <div
          ref={topPanelRef}
          className="absolute top-0 left-0 right-0 h-1/2 bg-white z-10 flex items-end justify-center pb-8"
        >
          <div className="text-center px-4 sm:px-6 max-w-3xl">
            <p className="text-gray-500 text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3">
              {topContent.subtitle}
            </p>
            <h2 className="text-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
              {topContent.title}
            </h2>
          </div>
        </div>

        {/* Bottom Panel - Slides down on scroll */}
        <div
          ref={bottomPanelRef}
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-white z-20 flex items-start justify-center pt-8"
        >
          <div className="text-center px-4 sm:px-6 max-w-3xl">
            <h2 className="text-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
              {bottomContent.title}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm tracking-widest uppercase mt-2 sm:mt-3">
              {bottomContent.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitReveal;
