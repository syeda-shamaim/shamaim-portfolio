import React, { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('overview');

  const data = {
    education: [
      { degree: 'Bachelor of Science in Computer Science (BSCS)', institution: 'University of Engineering & Technology (UET), Lahore', period: 'Expected 2026', semester: '7th Semester', icon: '🎓' },
      { degree: 'Intermediate in ICS – Grade A', institution: 'Punjab Group of Colleges (PGC), Lahore', period: '2020 – 2022', achievement: 'Scholarship Recipient', icon: '📚' },
      { degree: 'Matriculation in Computer Science – Grade A+', institution: 'Aligarh Public School, Gulberg Lahore', period: 'Completed', icon: '🏫' }
    ],
    certifications: [
      { title: 'Full Stack Web Development Course', provider: 'Information Technology University (ITU)', status: 'Completed', icon: '🌐' },
      { title: 'Web Development React.js Course', provider: 'Bano Qabil', status: 'Currently Pursuing', icon: '⚛️' }
    ],
    skills: {
      '💻 Programming Languages': ['Python', 'C/C++', 'PHP', 'JavaScript', 'HTML5', 'CSS3'],
      '🌐 Web Development': ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Flask', 'WordPress', 'React.js', 'Bootstrap'],
      '🤖 Machine Learning': ['Data Cleaning', 'Feature Engineering', 'Regression', 'Classification', 'NLP'],
      '🧠 AI & Deep Learning': ['Chatbot Development', 'CLIP', 'BLIP', 'CNNs (Learning)'],
      '🛠️ Tools & Platforms': ['Google Colab', 'Jupyter Notebook', 'Git/GitHub', 'VS Code', 'MS Office']
    },
    internship: {
      title: 'Machine Learning & Web Development Intern',
      company: 'Sprectex AI',
      period: 'Sep 2025 – Present',
      responsibilities: [
        'Developed and deployed full-stack web applications using HTML, CSS, JavaScript, PHP, and MySQL (Project: Forest Valley)',
        'Cleaned and preprocessed datasets with Python and Google Colab for machine learning workflows',
        'Designed and deployed predictive models using Flask covering regression and classification tasks',
        'Implemented an AI chatbot leveraging CLIP and BLIP for image-text understanding and Q&A',
        'Currently exploring Deep Learning concepts like CNNs and NLP-based solutions'
      ]
    },
    projects: [
      { name: 'Forest Valley Web Application', description: 'Full-stack dynamic web solution with HTML, CSS, JavaScript, PHP, and MySQL for forest data management and user interaction', tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'], category: 'Web Development' },
      { name: 'House Price Prediction App', description: 'Built and deployed regression models using Python and Flask, trained on cleaned datasets to accurately predict housing prices', tech: ['Python', 'Flask', 'ML'], category: 'Machine Learning' },
      { name: 'AI Chatbot', description: 'Chatbot using CLIP and BLIP models capable of text-image understanding and interactive Q&A for AI-driven applications', tech: ['Python', 'CLIP', 'BLIP', 'NLP'], category: 'AI & Deep Learning' },
      { name: 'Gym Management System', description: 'Complete gym management web application with database integration for managing members, schedules, and billing', tech: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'], category: 'Web Development' },
      { name: 'Hotel Management System', description: 'CLI-based management system with functionalities for booking, check-in, and user management', tech: ['C', 'C++'], category: 'Software Development' },
      { name: 'Weather App', description: 'React-based weather application with real-time data', tech: ['React', 'JavaScript', 'API'], category: 'React Apps' },
      { name: 'Todo App', description: 'Task management application built with React', tech: ['React', 'JavaScript'], category: 'React Apps' },
      { name: 'Counter App', description: 'Interactive counter application demonstrating React state management', tech: ['React', 'JavaScript'], category: 'React Apps' }
    ],
    stats: [
      { icon: '🎓', title: 'BSCS', subtitle: 'UET Lahore' },
      { icon: '💼', title: 'Intern', subtitle: 'Sprectex AI' },
      { icon: '🚀', title: '8+ Projects', subtitle: 'Completed' }
    ]
  };

  const tabs = ['overview', 'education', 'experience', 'skills', 'projects'];

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="tab-pane fade-in">
            <div className="overview-text">
              <h3>Hello! I'm Syeda Shamaim Fatima</h3>
              <p>A motivated and detail-oriented <strong>Computer Science student</strong> specializing in <strong> Machine Learning</strong> and <strong>Web Development</strong>. I have hands-on experience in building responsive web applications, developing AI-powered solutions, and implementing machine learning models.</p>
              <p>Currently in my 7th semester at UET Lahore, I'm passionate about solving real-world problems through data-driven and AI-based solutions. I'm continuously expanding my skills in <strong> React.js</strong> and <strong>deep learning technologies</strong>.</p>
              <div className="highlight-stats">
                {data.stats.map((stat, i) => (
                  <div key={i} className="stat-card">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-info">
                      <h4>{stat.title}</h4>
                      <p>{stat.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'education':
        return (
          <div className="tab-pane fade-in">
            <h3 className="tab-heading">Educational Background</h3>
            <div className="timeline">
              {data.education.map((edu, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-icon">{edu.icon}</div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>
                    <p className="period">{edu.period}</p>
                    {edu.semester && <span className="badge">{edu.semester}</span>}
                    {edu.achievement && <span className="badge achievement">{edu.achievement}</span>}
                  </div>
                </div>
              ))}
            </div>
            <h3 className="tab-heading" style={{marginTop: '3rem'}}>Certifications</h3>
            <div className="cert-grid">
              {data.certifications.map((cert, i) => (
                <div key={i} className="cert-card">
                  <div className="cert-icon">{cert.icon}</div>
                  <h4>{cert.title}</h4>
                  <p>{cert.provider}</p>
                  <span className={`status ${cert.status === 'Completed' ? 'completed' : 'ongoing'}`}>{cert.status}</span>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'experience':
        return (
          <div className="tab-pane fade-in">
            <div className="experience-card">
              <div className="exp-header">
                <div>
                  <h3>{data.internship.title}</h3>
                  <p className="company">{data.internship.company}</p>
                </div>
                <span className="period-badge">{data.internship.period}</span>
              </div>
              <h4 className="responsibilities-title">Key Responsibilities:</h4>
              <ul className="responsibilities-list">
                {data.internship.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
              </ul>
            </div>
          </div>
        );
      
      case 'skills':
        return (
          <div className="tab-pane fade-in">
            <div className="skills-grid">
              {Object.entries(data.skills).map(([category, skills]) => (
                <div key={category} className="skill-category">
                  <h3>{category}</h3>
                  <div className="skill-tags">
                    {skills.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="tab-pane fade-in">
            <div className="projects-grid">
              {data.projects.map((project, i) => (
                <div key={i} className="project-item">
                  <div className="project-category-badge">{project.category}</div>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, j) => <span key={j} className="tech-badge">{tech}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="about-section">
      <div className="wrap">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate about transforming ideas into reality through code and AI</p>
        </div>

        <div className="tab-navigation">
          {tabs.map(tab => (
            <button key={tab} className={`tab-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="tab-content">{renderContent()}</div>
      </div>

      <style jsx>{`
        .about-section { padding: 5rem 0; background: linear-gradient(180deg, #fafbfd 0%, #f0f4ff 100%); }
        .about-header { text-align: center; margin-bottom: 3rem; }
        .section-title { font-size: 3rem; font-weight: 800; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; background-clip: text; color: transparent; margin: 0 0 1rem 0; }
        .section-subtitle { color: #64748b; font-size: 1.15rem; margin: 0; }
        .tab-navigation { display: flex; gap: 0.5rem; margin-bottom: 2.5rem; overflow-x: auto; padding: 0.5rem; background: white; border-radius: 16px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04); }
        .tab-btn { padding: 0.75rem 1.5rem; border: none; background: transparent; border-radius: 12px; font-weight: 600; color: #64748b; cursor: pointer; transition: all 0.3s ease; white-space: nowrap; }
        .tab-btn:hover { background: rgba(102, 126, 234, 0.1); color: #667eea; }
        .tab-btn.active { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3); }
        .tab-content { min-height: 400px; }
        .tab-pane { animation: fadeIn 0.5s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .overview-text h3 { font-size: 2rem; margin: 0 0 1.5rem 0; color: #0f172a; }
        .overview-text p { color: #64748b; line-height: 1.8; margin-bottom: 1.25rem; font-size: 1.05rem; }
        .overview-text strong { color: #667eea; font-weight: 600; }
        .highlight-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; margin-top: 2.5rem; }
        .stat-card { background: white; padding: 1.5rem; border-radius: 16px; display: flex; align-items: center; gap: 1rem; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.06); transition: all 0.3s ease; }
        .stat-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15); }
        .stat-icon { font-size: 2.5rem; }
        .stat-info h4 { margin: 0; font-size: 1.25rem; color: #0f172a; }
        .stat-info p { margin: 0; color: #64748b; font-size: 0.9rem; }
        .tab-heading { font-size: 1.75rem; margin: 0 0 2rem 0; color: #0f172a; }
        .timeline { position: relative; padding-left: 2rem; }
        .timeline::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: linear-gradient(180deg, #667eea, #764ba2); }
        .timeline-item { position: relative; margin-bottom: 2.5rem; padding-left: 2.5rem; }
        .timeline-icon { position: absolute; left: -2.5rem; top: 0; width: 48px; height: 48px; background: white; border: 3px solid #667eea; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
        .timeline-content { background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.06); }
        .timeline-content h4 { margin: 0 0 0.5rem 0; color: #0f172a; font-size: 1.15rem; }
        .institution { color: #667eea; margin: 0 0 0.25rem 0; font-weight: 600; }
        .period { color: #64748b; margin: 0 0 0.75rem 0; font-size: 0.95rem; }
        .badge { display: inline-block; padding: 0.35rem 0.75rem; background: rgba(102, 126, 234, 0.1); color: #667eea; border-radius: 8px; font-size: 0.85rem; font-weight: 600; margin-right: 0.5rem; }
        .badge.achievement { background: rgba(245, 158, 11, 0.1); color: #f59e0b; }
        .cert-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
        .cert-card { background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.06); text-align: center; transition: all 0.3s ease; }
        .cert-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15); }
        .cert-icon { font-size: 3rem; margin-bottom: 1rem; }
        .cert-card h4 { margin: 0 0 0.5rem 0; color: #0f172a; }
        .cert-card p { color: #64748b; margin: 0 0 1rem 0; font-size: 0.95rem; }
        .status { display: inline-block; padding: 0.35rem 0.75rem; border-radius: 8px; font-size: 0.85rem; font-weight: 600; }
        .status.completed { background: rgba(16, 185, 129, 0.1); color: #10b981; }
        .status.ongoing { background: rgba(59, 130, 246, 0.1); color: #3b82f6; }
        .experience-card { background: white; padding: 2.5rem; border-radius: 20px; box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08); }
        .exp-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; gap: 1rem; flex-wrap: wrap; }
        .exp-header h3 { margin: 0 0 0.5rem 0; font-size: 1.75rem; color: #0f172a; }
        .company { color: #667eea; font-weight: 600; font-size: 1.1rem; margin: 0; }
        .period-badge { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 0.5rem 1rem; border-radius: 10px; font-weight: 600; font-size: 0.9rem; }
        .responsibilities-title { color: #0f172a; margin: 0 0 1rem 0; font-size: 1.15rem; }
        .responsibilities-list { list-style: none; padding: 0; margin: 0; }
        .responsibilities-list li { padding: 0.75rem 0; padding-left: 2rem; position: relative; color: #64748b; line-height: 1.6; border-bottom: 1px solid rgba(15, 23, 42, 0.05); }
        .responsibilities-list li:last-child { border-bottom: none; }
        .responsibilities-list li::before { content: '✓'; position: absolute; left: 0; color: #10b981; font-weight: bold; font-size: 1.2rem; }
        .skills-grid { display: grid; gap: 2rem; }
        .skill-category { background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.06); }
        .skill-category h3 { margin: 0 0 1.25rem 0; color: #0f172a; font-size: 1.25rem; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 0.75rem; }
        .skill-tag { background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)); color: #667eea; padding: 0.5rem 1rem; border-radius: 10px; font-weight: 600; font-size: 0.9rem; transition: all 0.3s ease; border: 1px solid rgba(102, 126, 234, 0.2); }
        .skill-tag:hover { background: linear-gradient(135deg, #667eea, #764ba2); color: white; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3); }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
        .project-item { background: white; padding: 1.75rem; border-radius: 16px; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.06); transition: all 0.3s ease; }
        .project-item:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15); }
        .project-category-badge { display: inline-block; background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 0.35rem 0.75rem; border-radius: 8px; font-size: 0.8rem; font-weight: 600; margin-bottom: 1rem; }
        .project-item h4 { margin: 0 0 0.75rem 0; color: #0f172a; font-size: 1.15rem; }
        .project-item p { color: #64748b; line-height: 1.6; margin: 0 0 1rem 0; font-size: 0.95rem; }
        .project-tech { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .tech-badge { background: rgba(102, 126, 234, 0.1); color: #667eea; padding: 0.25rem 0.6rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; }
        @media (max-width: 768px) {
          .section-title { font-size: 2rem; }
          .tab-navigation { flex-wrap: nowrap; overflow-x: auto; }
          .highlight-stats { grid-template-columns: 1fr; }
          .exp-header { flex-direction: column; }
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}