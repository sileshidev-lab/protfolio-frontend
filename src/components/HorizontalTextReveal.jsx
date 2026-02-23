import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const brandColors = [
  "bg-blue-600",
  "bg-purple-600",
  "bg-emerald-600",
];

const brandTextColors = [
  "text-white",
  "text-white",
  "text-white",
];

const HorizontalTextReveal = ({ panels }) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const getTotalScroll = () => track.scrollWidth - window.innerWidth;

      const hTween = gsap.fromTo(
        track,
        { x: 0 },
        {
          x: () => -getTotalScroll(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${getTotalScroll()}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        }
      );

      const panelEls = track.querySelectorAll(".h-panel");
      panelEls.forEach((panel) => {
        const words = panel.querySelectorAll(".h-word");
        gsap.fromTo(
          words,
          { opacity: 0.06, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.03,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: hTween,
              start: "left 80%",
              end: "left 30%",
              scrub: true,
              fastScrollEnd: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={sectionRef} className="relative overflow-hidden bg-[#030711]">
      <div ref={trackRef} className="flex h-screen items-center bg-[#030711]">
        <div className="shrink-0 w-screen h-screen flex items-center justify-center px-6">
          <div className="max-w-2xl text-center">
            {("Featured Projects").split(" ").map((word, i) => (
              <span key={i} className="h-word inline-block mr-[0.35em] text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white">
                {word}
              </span>
            ))}
          </div>
        </div>

        {panels.map((panel, index) => {
          const colorIndex = index % brandColors.length;
          return (
            <div
              key={index}
              className={`h-panel shrink-0 w-screen h-screen flex items-center px-6 sm:px-8 md:px-12 lg:px-24 ${brandColors[colorIndex]}`}
            >
              <div className="max-w-2xl">
                <p className="block mb-4 sm:mb-6">
                  {panel.heading.split(" ").map((word, i) => (
                    <span key={i} className={`h-word inline-block mr-[0.3em] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold ${brandTextColors[colorIndex]}`}>
                      {word}
                    </span>
                  ))}
                </p>
                <p className="block">
                  {panel.description.split(" ").map((word, i) => (
                    <span key={i} className={`h-word inline-block mr-[0.25em] text-sm sm:text-base md:text-lg lg:text-xl ${brandTextColors[colorIndex]}/60`}>
                      {word}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          );
        })}

        <div className="shrink-0 w-[50vw]" />
      </div>
    </div>
  );
};

export default HorizontalTextReveal;
