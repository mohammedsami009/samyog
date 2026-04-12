import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <span className="brand-title">SAMYOG</span>
        <span className="brand-year">2026</span>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#chakravyuha">Chakravyuha</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#sponsors">Sponsors</a></li>
      </ul>
    </nav>
  );
}
