import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "khalidshamaim@gmail.com",
      href: "mailto:khalidshamaim@gmail.com",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+92-320-9467807",
      href: "tel:+923209467807",
    },
    { icon: "📍", label: "Location", value: "Lahore, Pakistan", href: null },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1000);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="contact-section">
      <div className="wrap">
        <div className="contact-header">
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? Let's create something amazing!</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p className="contact-desc">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="info-cards">
              {contactInfo.map((info, i) => (
                <div key={i} className="info-item">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-text">
                    <span className="info-label">{info.label}</span>
                    {info.href ? (
                      <a href={info.href} className="info-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/syedashamaimfatima"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/syeda-shamaim"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={6}
              />
            </div>
            <div className="form-actions">
              <button
                className="btn-submit"
                onClick={handleSubmit}
                disabled={
                  status === "sending" ||
                  !formData.name ||
                  !formData.email ||
                  !formData.message
                }
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "✓ Sent!"
                  : "Send Message"}
              </button>
              <a className="btn-cv" href="/cv.pdf" download>
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
            </div>
            {status === "success" && (
              <div className="success-msg">Message sent successfully! 🎉</div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 5rem 0;
          background: linear-gradient(180deg, #fafbfd 0%, #f0f4ff 100%);
        }
        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .contact-header h2 {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin: 0 0 1rem 0;
        }
        .contact-header p {
          color: #64748b;
          font-size: 1.15rem;
          margin: 0;
        }
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
        }
        .contact-info {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
        }
        .contact-info h3 {
          font-size: 1.75rem;
          margin: 0 0 1rem 0;
          color: #0f172a;
        }
        .contact-desc {
          color: #64748b;
          line-height: 1.7;
          margin: 0 0 2.5rem 0;
        }
        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.05),
            rgba(118, 75, 162, 0.05)
          );
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        .info-item:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
        }
        .info-icon {
          font-size: 1.75rem;
          flex-shrink: 0;
        }
        .info-text {
          display: flex;
          flex-direction: column;
        }
        .info-label {
          font-size: 0.85rem;
          color: #64748b;
          font-weight: 600;
        }
        .info-value {
          color: #0f172a;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .info-value:hover {
          color: #667eea;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        .social-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }
        .contact-form {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border-radius: 12px;
          border: 2px solid rgba(15, 23, 42, 0.08);
          font-family: inherit;
          transition: all 0.3s ease;
          background: #fafbfd;
          font-size: 0.95rem;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          background: white;
        }
        .form-group textarea {
          min-height: 150px;
          resize: vertical;
        }
        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        .btn-submit {
          flex: 1;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
        }
        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .btn-cv {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          background: transparent;
          border: 2px solid rgba(15, 23, 42, 0.1);
          color: #0f172a;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-cv:hover {
          border-color: #667eea;
          background: rgba(102, 126, 234, 0.05);
          transform: translateY(-2px);
        }
        .success-msg {
          margin-top: 1rem;
          padding: 1rem;
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border-radius: 10px;
          text-align: center;
          font-weight: 600;
          animation: slideIn 0.3s ease;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 900px) {
          .contact-header h2 {
            font-size: 2rem;
          }
          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .form-actions {
            flex-direction: column;
          }
          .btn-submit,
          .btn-cv {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
