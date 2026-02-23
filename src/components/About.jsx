import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Code2, Database, Globe, Shield, Cpu, Smartphone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const skillsData = [
    {
      icon: Globe,
      title: "Frontend",
      items: ["React", "Vue.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      color: "#61DAFB"
    },
    {
      icon: Code2,
      title: "Backend",
      items: ["Node.js", "Express", "Java", "Spring Boot", "Python", "FastAPI", "Go"],
      color: "#68A063"
    },
    {
      icon: Database,
      title: "Database",
      items: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"],
      color: "#336791"
    },
    {
      icon: Smartphone,
      title: "Mobile",
      items: ["Flutter"],
      color: "#02569B"
    },
    {
      icon: Cpu,
      title: "DevOps",
      items: ["Docker", "Git", "CI/CD"],
      color: "#2496ED"
    },
    {
      icon: Shield,
      title: "Security",
      items: ["Penetration Testing", "Privacy Practices"],
      color: "#00D26A"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/sileshidev-lab", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sileshiabrham/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/sileshidev", label: "Twitter" },
    { icon: Mail, href: "mailto:sileshidev@gmail.com", label: "Email" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0, rotateX: -15 },
            {
              y: 0,
              opacity: 1,
              rotateX: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
              delay: index * 0.1,
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="about-section-new">
      <div className="about-header-new">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="section-eyebrow"
        >
          About Me
        </motion.span>
        <h2 ref={titleRef} className="about-title-new">
          Crafting Digital
          <span className="gradient-text"> Excellence</span>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="about-description-new"
        >
          Passionate full-stack developer with expertise in building scalable applications.
          Committed to clean code, innovative solutions, and continuous learning.
        </motion.p>
      </div>

      <div className="skills-showcase">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.title}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="skill-card-new"
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="skill-icon-wrapper" style={{ '--skill-color': skill.color }}>
              <skill.icon className="skill-icon-new" />
            </div>
            <h3 className="skill-card-title">{skill.title}</h3>
            <ul className="skill-card-list">
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="about-footer"
      >
        <div className="education-showcase">
          <div className="edu-card">
            <h4>Education</h4>
            <ul>
              <li>INSA 4th Batch Cyber Talent Graduate</li>
              <li>Diploma in IT (In Progress)</li>
              <li>Micro English Access Program Scholar</li>
            </ul>
          </div>
          <div className="edu-card">
            <h4>Certifications</h4>
            <ul>
              <li>DevOps Foundations: Microservices</li>
              <li>Programming Foundations: Design Patterns</li>
              <li>Programming Foundations: Fundamentals</li>
            </ul>
          </div>
        </div>

        <div className="social-showcase">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-new"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <social.icon className="social-icon-new" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
