import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const projects = [
    {
      name: "KMC AI Learning System",
      description:
        "An intelligent tutoring platform for TVET institutions featuring RAG-based Q&A, automated quiz generation, and real-time analytics.",
      tech: ["FastAPI", "MongoDB", "ChromaDB", "Hugging Face", "Redis"],
      link: "https://github.com/sileshidev-lab/KMCLEARNWITHAI",
      features: ["Multilingual support", "JWT authentication", "Progress tracking"],
    },
    {
      name: "Madda RFQ & Quotation Platform",
      description:
        "A comprehensive procurement platform for managing RFQs (Request for Quotations), vendor submissions, and automated quotation comparisons.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      link: "#",
      features: ["Multi-vendor RFQ management", "Automated price comparison", "Real-time notifications"],
    },
    {
      name: "NISIRCOP Crime Analytics",
      description:
        "An intelligent crime analytics and reporting platform featuring pattern detection, hotspot mapping, and predictive crime forecasting.",
      tech: ["Python", "FastAPI", "MongoDB", "TensorFlow", "Mapbox"],
      link: "#",
      features: ["Crime pattern analysis", "Geospatial hotspot mapping", "Predictive forecasting"],
    },
    {
      name: "Learning Analytics Dashboard",
      description:
        "Real-time analytics platform for tracking student engagement, performance metrics, and learning outcomes.",
      tech: ["FastAPI", "Pandas", "Chart.js"],
      link: "#",
      features: ["Data visualization", "Predictive analytics", "Export tools"],
    },
  ];

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
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        }
      );

      const cards = track.querySelectorAll(".project-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, y: 40 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: hTween,
              start: "left 90%",
              end: "left 50%",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative overflow-hidden bg-transparent">
      <div ref={trackRef} className="flex h-screen items-center">
        {/* Intro Panel */}
        <div className="shrink-0 w-screen h-screen flex flex-col items-center justify-center px-6 bg-transparent">
          <div className="text-center max-w-2xl">
            <p className="text-gray-900 font-semibold text-sm tracking-widest uppercase mb-4">
              Featured Work
            </p>
            <h2 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Projects
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Here are some of the key projects I&apos;ve been working on, focused on
              bringing AI-powered solutions to education in Ethiopia.
            </p>
          </div>
        </div>

        {/* Project Pages */}
        {projects.map((project, index) => {
          return (
            <div
              key={project.name}
              className="project-card shrink-0 w-screen h-screen bg-transparent p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center"
            >
              <div className="max-w-4xl">
                <span className="text-gray-500 text-sm font-medium tracking-widest">
                  {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
                <h3 className="text-black text-3xl md:text-4xl lg:text-6xl font-bold mt-4 mb-6">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-sm md:text-base text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-500 mb-10">
                  {project.features.map((f) => (
                    <li key={f}>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-900 text-lg"
                >
                  View Project
                </a>
              </div>
            </div>
          );
        })}

        {/* End Spacer */}
        <div className="shrink-0 w-[20vw]" />
      </div>
    </section>
  );
};

export default Projects;
