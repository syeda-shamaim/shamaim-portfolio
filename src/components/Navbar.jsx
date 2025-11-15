import React from 'react';
import DownloadButton from './DownloadButton.jsx';

export default function Navbar() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        {/* Brand / Logo */}
        <a href="/" className="brand">Shamaim</a>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <DownloadButton />
        </nav>
      </div>
    </header>
  );
}
