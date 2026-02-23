import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Bot, Languages, BookOpen, LineChart, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      name: "KMC AI Learning System",
      description:
        "An intelligent tutoring platform for TVET institutions featuring RAG-based Q&A, automated quiz generation, and real-time analytics.",
      tech: ["FastAPI", "MongoDB", "ChromaDB", "Hugging Face", "Redis"],
      icon: Bot,
      link: "https://github.com/sileshidev-lab/KMCLEARNWITHAI",
      features: ["Multilingual support", "JWT authentication", "Progress tracking"],
      color: "#6366f1"
    },
    {
      name: "NLP Tools for Amharic",
      description:
        "Natural language processing utilities for Amharic text including tokenization, sentiment analysis, and named entity recognition.",
      tech: ["Python", "Transformers", "PyTorch"],
      icon: Languages,
      link: "#",
      features: ["Custom tokenizer", "BERT-based models", "Open source"],
      color: "#10b981"
    },
    {
      name: "TVET Course Manager",
      description:
        "A comprehensive course management system designed specifically for technical and vocational education workflows.",
      tech: ["Django", "PostgreSQL", "React"],
      icon: BookOpen,
      link: "#",
      features: ["Curriculum mapping", "Assessment tools", "Reporting"],
      color: "#f59e0b"
    },
    {
      name: "Learning Analytics Dashboard",
      description:
        "Real-time analytics platform for tracking student engagement, performance metrics, and learning outcomes.",
      tech: ["FastAPI", "Pandas", "Chart.js"],
      icon: LineChart,
      link: "#",
      features: ["Data visualization", "Predictive analytics", "Export tools"],
      color: "#ec4899"
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { 
              y: 100, 
              opacity: 0,
              rotateY: index % 2 === 0 ? -15 : 15,
            },
            {
              y: 0,
              opacity: 1,
              rotateY: 0,
              duration: 1,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
              delay: index * 0.15,
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="projects-section-new">
      <div className="projects-header">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="section-eyebrow"
        >
          Featured Work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="projects-title"
        >
          Projects That
          <span className="gradient-text"> Make Impact</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="projects-description"
        >
          Here are some of the key projects I've been working on, focused on
          bringing AI-powered solutions to education in Ethiopia.
        </motion.p>
      </div>

      <div className="projects-grid-new">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="project-card-new"
            whileHover={{ 
              y: -15,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            style={{ '--project-color': project.color }}
          >
            <div className="project-card-header">
              <div className="project-icon-wrapper" style={{ background: `${project.color}20` }}>
                <project.icon className="project-icon" style={{ color: project.color }} />
              </div>
              <div className="project-links">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tech-stack">
              {project.tech.map((t) => (
                <span key={t} className="tech-badge-new">
                  {t}
                </span>
              ))}
            </div>

            <ul className="project-features">
              {project.features.map((f) => (
                <li key={f}>
                  <span className="feature-dot" style={{ background: project.color }} />
                  {f}
                </li>
              ))}
            </ul>

            <div className="project-card-glow" style={{ background: project.color }} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="projects-cta"
      >
        <a 
          href="https://github.com/sileshidev-lab" 
          target="_blank" 
          rel="noopener noreferrer"
          className="view-all-btn"
        >
          View All Projects
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;
