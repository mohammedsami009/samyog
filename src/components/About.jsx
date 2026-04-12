import { useState, useRef, useEffect } from 'react';
import './About.css';

export default function About() {
  const [transformed, setTransformed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !transformed) {
          // Add slight delay before transforming automatically
          const timer = setTimeout(() => setTransformed(true), 2500);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.6 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, [transformed]);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <h2 className="section-title">THE EVOLUTION OF KNOWLEDGE</h2>
      <div className="about-container">
        <div className={`manuscript-wrapper ${transformed ? 'code-mode' : ''}`}>
           <div className="palm-leaf">
              <h3>योग: कर्मसु कौशलम्</h3>
              <p>In the ancient halls of wisdom, algorithms were first etched onto palm leaves as cosmic rhythms.</p>
              <p>Passing down through generations, tradition built the unshakable foundation for modern logic and artistry.</p>
              <div className="hint-text">Witness the evolution...</div>
           </div>
           
           <div className="code-editor">
              <div className="editor-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="filename">samyog.jsx</span>
              </div>
              <div className="editor-body">
                <p><span className="keyword">import</span> {'{ Heritage }'} <span className="keyword">from</span> <span className="string">'@culture/ancient'</span>;</p>
                <p><span className="keyword">import</span> {'{ Future }'} <span className="keyword">from</span> <span className="string">'@tech/vision'</span>;</p>
                <br/>
                <p><span className="keyword">export function</span> <span className="function">Innovate</span>() {'{'}</p>
                <p>&nbsp;&nbsp;<span className="keyword">return</span> Heritage.evolve().synthesize(Future);</p>
                <p>{'}'}</p>
                <br/>
                <p className="comment">// Samyog: Where Culture Meets Code</p>
              </div>
           </div>
        </div>
        <div className="about-text">
          <p className="samyog-meaning"><em>SAMYOG 2026 embodies its very name—Samyog (संयोग), rooted in “sam” (together) and “yuj” (to unite), representing a powerful union—the coming together of ideas, energies, and moments in perfect harmony.</em></p>
          <br/>
          <p><strong>SAMYOG 2026</strong> represents the absolute pinnacle of convergence between our rich Indian cultural heritage and cutting-edge technological advancements.</p>
          <br/>
          <p>Hosted by the Department of Information Science and Engineering at JSSATE Bengaluru, this festival is more than just events; it's a profound experience.</p>
          <br/>
          <p>Witness a magnificent showcase where traditional arts inspire modern engineering, creating an unforgettable synthesis of past and future, aesthetics and logic.</p>
        </div>
      </div>
    </section>
  );
}
