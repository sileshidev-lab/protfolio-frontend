import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/sileshidev-lab', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/sileshidev', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sileshiabrham/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sileshidev@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-new">
      <div className="footer-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="footer-brand"
        >
          <h3>Sileshi Abrham</h3>
          <p>Full-Stack Developer & AI Enthusiast</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="footer-social"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="footer-bottom"
        >
          <p>
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in Addis Ababa
          </p>
          <span>© {new Date().getFullYear()} Sileshi Abrham. All rights reserved.</span>
        </motion.div>
      </div>

      <motion.button
        className="back-to-top"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
