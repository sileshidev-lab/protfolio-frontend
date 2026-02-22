import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const About = () => {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;

  const skillsData = [
    {
      title: "Frontend",
      items: ["React", "Vue.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "Java", "Spring Boot", "Python", "FastAPI", "Go"]
    },
    {
      title: "Database",
      items: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"]
    },
    {
      title: "Mobile",
      items: ["Flutter"]
    },
    {
      title: "DevOps",
      items: ["Docker", "Git", "CI/CD"]
    },
    {
      title: "Security",
      items: ["Penetration Testing", "Privacy Practices"]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/sileshidev-lab", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sileshiabrham/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/sileshidev", label: "Twitter" },
    { icon: Mail, href: "mailto:sileshidev@gmail.com", label: "Email" }
  ];

  return (
    <div className="about-container">
      <div className="about-content-wrapper">
        <div className="about-main-grid">
          {/* Left Side - Skills & Info (60%) */}
          <div className="skills-section">
            <div className="skills-grid">
              {skillsData.map((skill, index) => (
                <div key={skill.title} className="skill-category" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-header">
                    <h4 className="skill-title">{skill.title}</h4>
                  </div>
                  <ul className="skill-list">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - About Me + Socials (40%) */}
          <div className="about-info-section">
            <div className="about-header">
              <h2 className="about-title">ABOUT ME</h2>
              <p className="about-description">
                Building modern web applications with clean code and scalable architecture.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <Icon className="social-icon" />
                  </a>
                );
              })}
            </div>

            {/* Education Section - Full width */}
            <div className="education-section">
              <div className="education-grid">
                <div className="education-category">
                  <h4 className="education-title">Academic Education</h4>
                  <ul className="education-list">
                    <li>INSA 4th Batch Cyber Talent Graduate</li>
                    <li>Currently learning Diploma in IT</li>
                    <li>Scholarship recipient for Micro English Access Program (Saint Mary's University & US Embassy)</li>
                  </ul>
                </div>
                <div className="education-category">
                  <h4 className="education-title">Professional Certifications</h4>
                  <ul className="education-list">
                    <li>DevOps Foundations: Microservices</li>
                    <li>Programming Foundations: Design Patterns</li>
                    <li>Programming Foundations: Fundamentals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
