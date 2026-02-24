import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Bot, FileText, Shield, LineChart, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const Projects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const projects = [
    {
      name: "KMC AI Learning System",
      description:
        "An intelligent tutoring platform for TVET institutions featuring RAG-based Q&A, automated quiz generation, and real-time analytics.",
      tech: ["FastAPI", "MongoDB", "ChromaDB", "Hugging Face", "Redis"],
      icon: Bot,
      link: "https://github.com/sileshidev-lab/KMCLEARNWITHAI",
      features: ["Multilingual support", "JWT authentication", "Progress tracking"],
      color: "bg-blue-600",
    },
    {
      name: "Madda RFQ & Quotation Platform",
      description:
        "A comprehensive procurement platform for managing RFQs (Request for Quotations), vendor submissions, and automated quotation comparisons.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      icon: FileText,
      link: "#",
      features: ["Multi-vendor RFQ management", "Automated price comparison", "Real-time notifications"],
      color: "bg-purple-600",
    },
    {
      name: "NISIRCOP Crime Analytics",
      description:
        "An intelligent crime analytics and reporting platform featuring pattern detection, hotspot mapping, and predictive crime forecasting.",
      tech: ["Python", "FastAPI", "MongoDB", "TensorFlow", "Mapbox"],
      icon: Shield,
      link: "#",
      features: ["Crime pattern analysis", "Geospatial hotspot mapping", "Predictive forecasting"],
      color: "bg-emerald-600",
    },
    {
      name: "Learning Analytics Dashboard",
      description:
        "Real-time analytics platform for tracking student engagement, performance metrics, and learning outcomes.",
      tech: ["FastAPI", "Pandas", "Chart.js"],
      icon: LineChart,
      link: "#",
      features: ["Data visualization", "Predictive analytics", "Export tools"],
      color: "bg-orange-600",
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
    <section id="projects" ref={sectionRef} className="relative overflow-hidden bg-[#030711]">
      <div ref={trackRef} className="flex h-screen items-center">
        {/* Intro Panel */}
        <div className="shrink-0 w-screen h-screen flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            viewport={{ once: true }}
            className="text-center max-w-2xl"
          >
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Featured Work
            </p>
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Projects
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Here are some of the key projects I&apos;ve been working on, focused on
              bringing AI-powered solutions to education in Ethiopia.
            </p>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-8"
            >
              <ArrowRight className="w-8 h-8 text-blue-400 mx-auto" />
            </motion.div>
          </motion.div>
        </div>

        {/* Project Panels */}
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <div
              key={project.name}
              className={`project-card shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] h-[80vh] mx-4 md:mx-8 rounded-3xl ${project.color} p-8 md:p-12 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white/60 text-sm font-medium">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  {project.name}
                </h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm rounded-full bg-white/20 text-white backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <ul className="flex flex-wrap gap-4 text-sm text-white/70 mb-8">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4" />
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
