import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Weather App",
      desc: "Real-time weather forecast using OpenWeather API",
      link: "https://weather-app-dusky-chi-49.vercel.app/",
      tags: ["React", "API"],
      icon: "🌤️",
    },
    {
      title: "Todo App",
      desc: "Task management application with CRUD operations",
      link: "https://todo-app-chi-self.vercel.app/",
      tags: ["React", "JavaScript"],
      icon: "✅",
    },
    {
      title: "Counter App",
      desc: "Interactive counter demonstrating React state management",
      link: "https://counter-app-drab-phi.vercel.app/",
      tags: ["React", "Hooks"],
      icon: "🔢",
    },
  ];

  return (
    <section className="projects-section">
      <div className="wrap">
        <div className="projects-header">
          <h2>React Projects</h2>
          <p>Building interactive web applications with React</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <article key={i} className="project-card">
              <span className="project-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((tag, j) => (
                  <span key={j} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              {p.link !== "#" && (
                <a
                  className="project-link"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
      <style jsx>{`
        .projects-section {
          padding: 5rem 0;
          background: #fafbfd;
        }
        .projects-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .projects-header h2 {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin: 0 0 1rem 0;
        }
        .projects-header p {
          color: #64748b;
          font-size: 1.15rem;
          margin: 0;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .project-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
          transition: all 0.3s ease;
          border: 1px solid rgba(15, 23, 42, 0.05);
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(102, 126, 234, 0.15);
        }
        .project-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 1rem;
        }
        .project-card h3 {
          font-size: 1.4rem;
          margin: 0 0 0.75rem 0;
          color: #0f172a;
        }
        .project-card p {
          color: #64748b;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
          font-size: 0.95rem;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .tag {
          padding: 0.35rem 0.75rem;
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .tag:hover {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          transform: translateY(-2px);
        }
        .project-link {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        .project-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }
        @media (max-width: 768px) {
          .projects-header h2 {
            font-size: 2rem;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
