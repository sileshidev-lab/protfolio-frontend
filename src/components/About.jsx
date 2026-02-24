import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Database, Globe, Shield, Smartphone, Terminal } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const About = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  const skillsData = [
    {
      title: "Frontend",
      icon: Globe,
      items: ["React", "Vue.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: Terminal,
      items: ["Node.js", "Express", "Java", "Spring Boot", "Python", "FastAPI", "Go"]
    },
    {
      title: "Database",
      icon: Database,
      items: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      items: ["Flutter"]
    },
    {
      title: "DevOps",
      icon: Code2,
      items: ["Docker", "Git", "CI/CD"]
    },
    {
      title: "Security",
      icon: Shield,
      items: ["Penetration Testing", "Privacy Practices"]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (skillsRef.current) {
        const cards = skillsRef.current.querySelectorAll(".skill-card");
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Building Digital <span className="text-blue-600">Experiences</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I&apos;m a passionate full-stack developer based in Addis Ababa, Ethiopia. 
            With expertise in modern web technologies and a keen eye for design, 
            I create scalable applications that deliver exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-blue-500/50 transition-colors">
              <h3 className="text-black text-xl font-bold mb-4">Academic Education</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                  INSA 4th Batch Cyber Talent Graduate
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                  Currently learning Diploma in IT
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                  Scholarship recipient for Micro English Access Program
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-blue-500/50 transition-colors">
              <h3 className="text-black text-xl font-bold mb-4">Professional Certifications</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0" />
                  DevOps Foundations: Microservices
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0" />
                  Programming Foundations: Design Patterns
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0" />
                  Programming Foundations: Fundamentals
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="skill-card group bg-gray-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-blue-500/50 hover:bg-white transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h4 className="text-black text-lg font-bold">{skill.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full group-hover:bg-blue-500/20 group-hover:text-blue-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
