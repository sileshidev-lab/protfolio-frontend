import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

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

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gray-900 font-semibold text-sm tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Building Digital Experiences
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I&apos;m a passionate full-stack developer based in Addis Ababa, Ethiopia. 
            With expertise in modern web technologies and a keen eye for design, 
            I create scalable applications that deliver exceptional user experiences.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-black text-xl font-bold mb-4">Academic Education</h3>
              <ul className="space-y-2 text-gray-600">
                <li>INSA 4th Batch Cyber Talent Graduate</li>
                <li>Currently learning Diploma in IT</li>
                <li>Scholarship recipient for Micro English Access Program</li>
              </ul>
            </div>
            <div>
              <h3 className="text-black text-xl font-bold mb-4">Professional Certifications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>DevOps Foundations: Microservices</li>
                <li>Programming Foundations: Design Patterns</li>
                <li>Programming Foundations: Fundamentals</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill) => {
            return (
              <div key={skill.title}>
                <h4 className="text-black text-lg font-bold mb-3">{skill.title}</h4>
                <ul className="space-y-1 text-gray-600">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
