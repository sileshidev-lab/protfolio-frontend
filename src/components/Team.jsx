import { Users, Mail, MapPin, Briefcase } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Sileshi",
      role: "Lead Developer",
      bio: "Full-stack developer & AI enthusiast building the future of education.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Abebe",
      role: "Backend Engineer",
      bio: "Database architect and API specialist ensuring scalable systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Hanna",
      role: "ML Engineer",
      bio: "Machine learning expert focused on NLP and model optimization.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Dawit",
      role: "Frontend Developer",
      bio: "UI/UX specialist creating intuitive and beautiful interfaces.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section id="team" className="section">
      <span className="section__eyebrow">The Team</span>
      <div className="section__body" style={{ maxWidth: "1100px" }}>
        <h2 className="animate-slideInLeft">Meet the Team</h2>
        <p>
          A passionate group of developers, designers, and educators working together
          to transform education through technology.
        </p>
        <div className="team-grid">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="team-card animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="team-card__photo"
              />
              <h3 className="team-card__name">{member.name}</h3>
              <div className="team-card__role">{member.role}</div>
              <p className="team-card__bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
