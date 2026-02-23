import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitReveal = ({ topContent, bottomContent, middleContent }) => {
  const sectionRef = useRef(null);
  const topPanelRef = useRef(null);
  const bottomPanelRef = useRef(null);
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const topPanel = topPanelRef.current;
    const bottomPanel = bottomPanelRef.current;

    if (!section || !topPanel || !bottomPanel) return;

    const ctx = gsap.context(() => {
      gsap.set(topPanel, { y: 0 });
      gsap.set(bottomPanel, { y: 0 });

      const splitTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          pin: false,
        },
      });

      splitTl.to(topPanel, {
        y: "-100%",
        ease: "none",
      }, 0);

      splitTl.to(bottomPanel, {
        y: "100%",
        ease: "none",
      }, 0);

      if (topTextRef.current) {
        gsap.fromTo(topTextRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
          }
        );
      }

      if (bottomTextRef.current) {
        gsap.fromTo(bottomTextRef.current,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative h-[200vh] bg-[#030711]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {middleContent && (
          <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#030711]">
            <div className="text-center px-6 max-w-4xl">
              <h3 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                {middleContent.title}
              </h3>
              <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
                {middleContent.description}
              </p>
            </div>
          </div>
        )}

        <div
          ref={topPanelRef}
          className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-600 to-blue-800 z-10 flex items-end justify-center pb-8"
          style={{ willChange: "transform" }}
        >
          <div ref={topTextRef} className="text-center px-4 sm:px-6 max-w-3xl">
            <p className="text-white/60 text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3">
              {topContent.subtitle}
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
              {topContent.title}
            </h2>
          </div>
        </div>

        <div
          ref={bottomPanelRef}
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-600 to-purple-800 z-20 flex items-start justify-center pt-8"
          style={{ willChange: "transform" }}
        >
          <div ref={bottomTextRef} className="text-center px-4 sm:px-6 max-w-3xl">
            <h2 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
              {bottomContent.title}
            </h2>
            <p className="text-white/60 text-xs sm:text-sm tracking-widest uppercase mt-2 sm:mt-3">
              {bottomContent.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitReveal;
