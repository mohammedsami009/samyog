import { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  const [particles, setParticles] = useState([]);
  const [taglineIndex, setTaglineIndex] = useState(0);

  const taglines = [
    "WHERE CULTURE MEETS CODE",
    "जहाँ संस्कृति और तकनीक का संगम",
    "<Where culture={meets: code} />"
  ];

  useEffect(() => {
    // Generate tech/coding particles
    const techChars = ['0', '1', '{', '}', '<', '>', '/', ';', '++', '()', '=>'];
    const pArr = Array.from({ length: 60 }).map(() => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${10 + Math.random() * 15}s`,
      size: `${12 + Math.random() * 14}px`,
      text: techChars[Math.floor(Math.random() * techChars.length)]
    }));
    setParticles(pArr);

    // Tagline cycling interval
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3500); // Cycle every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container">
      {/* Moving Tech/Code Elements (Matrix Rain) */}
      <div className="particles-container">
        {particles.map((p, i) => (
          <div key={i} className="particle tech-element" style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            fontSize: p.size
          }}>
            {p.text}
          </div>
        ))}
      </div>

      <div className="hero-main-flex">
        {/* Hero UI Content perfectly centered */}
        <div className="hero-content">
          <img 
            src="/Assets/samyog-logo-gradient.png" 
            alt="Samyog 2026" 
            className="hero-logo" 
            onError={(e) => { e.target.src = '/Assets/samyog-logo-gradient.png' }}
          />
          
          <div className="tagline-container">
            <h2 key={taglineIndex} className="tagline fade-in-text">
              {taglines[taglineIndex]}
            </h2>
          </div>

          <div className="cta-container">
            <button className="cta-btn primary">Explore Events</button>
            <button className="cta-btn secondary">Register Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
