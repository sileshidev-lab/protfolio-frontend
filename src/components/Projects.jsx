import { ExternalLink, Github, Bot, Languages, BookOpen, LineChart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "KMC AI Learning System",
      description:
        "An intelligent tutoring platform for TVET institutions featuring RAG-based Q&A, automated quiz generation, and real-time analytics.",
      tech: ["FastAPI", "MongoDB", "ChromaDB", "Hugging Face", "Redis"],
      icon: Bot,
      link: "https://github.com/sileshidev-lab/KMCLEARNWITHAI",
      features: ["Multilingual support", "JWT authentication", "Progress tracking"],
    },
    {
      name: "NLP Tools for Amharic",
      description:
        "Natural language processing utilities for Amharic text including tokenization, sentiment analysis, and named entity recognition.",
      tech: ["Python", "Transformers", "PyTorch"],
      icon: Languages,
      link: "#",
      features: ["Custom tokenizer", "BERT-based models", "Open source"],
    },
    {
      name: "TVET Course Manager",
      description:
        "A comprehensive course management system designed specifically for technical and vocational education workflows.",
      tech: ["Django", "PostgreSQL", "React"],
      icon: BookOpen,
      link: "#",
      features: ["Curriculum mapping", "Assessment tools", "Reporting"],
    },
    {
      name: "Learning Analytics Dashboard",
      description:
        "Real-time analytics platform for tracking student engagement, performance metrics, and learning outcomes.",
      tech: ["FastAPI", "Pandas", "Chart.js"],
      icon: LineChart,
      link: "#",
      features: ["Data visualization", "Predictive analytics", "Export tools"],
    },
  ];

  return (
    <section id="projects" className="section">
      <span className="section__eyebrow">Featured Work</span>
      <div className="section__body">
        <h2 className="animate-slideInLeft">Projects</h2>
        <p>
          Here are some of the key projects I've been working on, focused on
          bringing AI-powered solutions to education in Ethiopia.
        </p>
        <div className="grid gap-6 mt-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group p-6 rounded-2xl border border-[var(--color-border)] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[var(--color-accent-soft)]">
                  <project.icon className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-[var(--font-display)] text-xl">
                      {project.name}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-accent)] hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-[var(--color-text-muted)] mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full border border-[var(--color-border)] bg-white/[0.03]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="flex flex-wrap gap-4 text-sm text-[var(--color-text-muted)]">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
