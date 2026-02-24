import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const Hero = () => {
  const heroRef = useRef(null);

  const socialLinks = [
    { icon: Github, href: "https://github.com/sileshidev-lab", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sileshiabrham/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/sileshidev", label: "Twitter" },
    { icon: Mail, href: "mailto:sileshidev@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...transition, delay: 0.2 }}
              className="text-gray-900 font-semibold text-sm tracking-widest uppercase mb-4"
            >
              Full-Stack Developer
            </motion.p>

            <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 whitespace-nowrap">
              Sileshi Abrham
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
                    className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-800 hover:text-white transition-colors"
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
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full blur-2xl opacity-50" />
              <img
                src="/photo_2025-12-08_05-13-07.jpg"
                alt="Sileshi Abrham"
                className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover object-top rounded-full border-4 border-black/10 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
