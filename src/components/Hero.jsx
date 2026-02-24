import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const Hero = () => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const [splineError, setSplineError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = nameRef.current?.querySelectorAll(".char");
      if (chars) {
        gsap.fromTo(
          chars,
          { opacity: 0, y: 100, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.05,
            ease: "power4.out",
            delay: 0.5,
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/sileshidev-lab", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sileshiabrham/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/sileshidev", label: "Twitter" },
    { icon: Mail, href: "mailto:sileshidev@gmail.com", label: "Email" },
  ];

  const name = "Sileshi Abrham";

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-10" />
      </motion.div>

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-20 max-w-7xl mx-auto px-6 py-32 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...transition, delay: 0.2 }}
              className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4"
            >
              Full-Stack Developer
            </motion.p>

            <h1
              ref={nameRef}
              className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 perspective-1000"
            >
              {name.split("").map((char, i) => (
                <span
                  key={i}
                  className="char inline-block"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.8 }}
              className="text-gray-600 text-lg sm:text-xl max-w-lg leading-relaxed mb-8"
            >
              Building modern web applications with clean code and scalable architecture.
              Specialized in React, Node.js, and cloud technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 1 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center text-black hover:bg-blue-500 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ ...transition, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-50" />
              <img
                src="/photo_2025-12-08_05-13-07.jpg"
                alt="Sileshi Abrham"
                className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-black/10 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center text-black/50 hover:text-black transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
