import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Send, CheckCircle, AlertCircle, MapPin, MessageSquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState(null);
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setFormMessage({ type: 'error', text: 'Please enter a valid email address' });
      return;
    }
    setFormMessage({ type: 'success', text: 'Thanks for reaching out! I will get back to you soon.' });
    setEmail('');
    setMessage('');
  };

  return (
    <div ref={sectionRef} className="contact-section-new">
      <div className="contact-header">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="section-eyebrow"
        >
          Get in Touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-title"
        >
          Let's Work
          <span className="gradient-text"> Together</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="contact-description"
        >
          Interested in collaborating or have a project in mind? 
          I'd love to hear from you. Let's create something amazing together.
        </motion.p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="contact-card"
          >
            <div className="contact-icon">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4>Email</h4>
              <a href="mailto:sileshidev@gmail.com">sileshidev@gmail.com</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="contact-card"
          >
            <div className="contact-icon">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4>Location</h4>
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="contact-card"
          >
            <div className="contact-icon">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4>Availability</h4>
              <span>Open for freelance & full-time</span>
            </div>
          </motion.div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form-new">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="form-input-new"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project..."
              rows={4}
              className="form-textarea-new"
            />
          </div>
          <motion.button
            type="submit"
            className="submit-btn-new"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-5 h-5" />
            Send Message
          </motion.button>
          {formMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`form-message ${formMessage.type}`}
            >
              {formMessage.type === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              {formMessage.text}
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
