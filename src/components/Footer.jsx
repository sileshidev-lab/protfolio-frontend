import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/sileshidev-lab", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/sileshidev", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sileshiabrham/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sileshidev@gmail.com", label: "Email" },
  ];

  return (
    <footer>
      <div className="social-bar">
        {socialLinks.map((social, index) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="animate-popIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
      <div className="footer">
        <p className="flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-[var(--color-accent)] fill-current" /> in Addis Ababa
        </p>
        <p className="mt-2 text-sm opacity-60">
          © {new Date().getFullYear()} Sileshi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
