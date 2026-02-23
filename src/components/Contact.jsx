import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formMessage, setFormMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setFormMessage({ type: "error", text: "Please enter a valid email address" });
      return;
    }
    setFormMessage({ type: "success", text: "Thanks for subscribing! We'll be in touch soon." });
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="section">
      <span className="section__eyebrow">Get in Touch</span>
      <div className="section__body">
        <h2 className="animate-slideInLeft">Contact</h2>
        <p>
          Interested in collaborating or learning more about our work? Drop us a line
          or subscribe to our newsletter for updates on AI in education.
        </p>
        <form onSubmit={handleSubmit} className="form animate-fadeInUp">
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="form__input"
            />
          </div>
          <button type="submit" className="btn btn--primary form__submit">
            <Send className="w-4 h-4 mr-2" />
            Subscribe
          </button>
        </form>
        {formMessage && (
          <div
            className={`form__message ${formMessage.type} animate-fadeInUp`}
            style={{ animationDelay: "0.2s" }}
          >
            {formMessage.type === "success" ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            {formMessage.text}
          </div>
        )}
        <div className="flex flex-wrap gap-6 mt-8 text-[var(--color-text-muted)]">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors"
          >
            <Mail className="w-5 h-5" />
            your.email@example.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
