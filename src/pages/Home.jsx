import React from 'react'
import profile from '../assets/profile.jpeg'

export default function Home(){
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Computer Science Student | ML & Web Developer</p>
          <h1>Hi, I'm <span className="name">Syeda Shamaim Fatima</span></h1>
          <p className="lead">Motivated and detail-oriented Machine Learning and Web Development student building responsive web applications and ML solutions.</p>
          <div className="cta">
            <a href="/projects" className="btn primary">View Projects</a>
            <a className="btn ghost" href="mailto:khalidshamaim@gmail.com">khalidshamaim@gmail.com</a>
          </div>
          <ul className="meta">
            <li><strong>Location:</strong> Lahore, Pakistan</li>
            <li><strong>Phone:</strong> +92-320-9467807</li>
          </ul>
        </div>
        <div className="hero-media">
         <img src={profile} alt="Profile" className="avatar" />
          <div className="card info">
            <h4>Intern — Sprectex AI</h4>
            <p>Machine Learning & Web Development Intern (Sep 2025 - Present)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
