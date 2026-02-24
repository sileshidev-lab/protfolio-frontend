import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

const About = () => {
  const sectionRef = useRef(null);

  const education = [
    { title: "INSA 4th Batch", subtitle: "Cyber Talent Graduate" },
    { title: "Diploma in IT", subtitle: "Currently learning" },
    { title: "Micro English Access", subtitle: "Scholarship recipient" },
  ];

  const certifications = [
    "DevOps Foundations: Microservices",
    "Programming Foundations: Design Patterns", 
    "Programming Foundations: Fundamentals",
  ];

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Vue.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Java", "Spring Boot", "Python", "FastAPI", "Go"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"]
    },
    {
      title: "Mobile",
      skills: ["Flutter"]
    },
    {
      title: "DevOps",
      skills: ["Docker", "Git", "CI/CD"]
    },
    {
      title: "Security",
      skills: ["Penetration Testing", "Privacy Practices"]
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header - Material Display Large */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-medium tracking-wider text-gray-600 uppercase mb-3">
            About Me
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-gray-900 tracking-tight mb-6">
            Building Digital Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            I&apos;m a passionate full-stack developer based in Addis Ababa, Ethiopia. 
            With expertise in modern web technologies and a keen eye for design, 
            I create scalable applications that deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Education & Certifications - Material Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-6"
          >
            <h3 className="text-xl font-medium text-gray-900 mb-6">Academic Education</h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                    <span className="text-sm font-semibold text-gray-700">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-6"
          >
            <h3 className="text-xl font-medium text-gray-900 mb-6">Professional Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gray-400 shrink-0" />
                  <p className="text-gray-700">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills - Material Chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-medium text-gray-900 mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-lg transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
