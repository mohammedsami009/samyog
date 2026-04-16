import { useEffect, useRef, useState } from 'react';
import './Timeline.css';

const schedule = [
  {
    day: "April 27th",
    title: "Sports Arena",
    icon: "⚡",
    desc: "Kickoff with intense Cricket, Basketball, Chess, Carrom, and Tug of War tournaments.",
    color: "#00F5FF",
    accentColor: "rgba(0, 245, 255, 0.15)",
  },
  {
    day: "April 28th",
    title: "Tech & Sports",
    icon: "⚙️",
    desc: "Technical events including Chakravyuha begin, alongside thrilling sports finals.",
    color: "#FF9933",
    accentColor: "rgba(255, 153, 51, 0.15)",
  },
  {
    day: "April 29th",
    title: "NCAIT-2026",
    icon: "🧠",
    desc: "12th National Conference focusing on the monumental Role of AI in Cyber Security.",
    color: "#D4AF37",
    accentColor: "rgba(212, 175, 55, 0.15)",
  },
  {
    day: "April 30th",
    title: "Cultural Extravaganza",
    icon: "🎭",
    desc: "Singing, dancing, and fashion walk. The grand closing valedictory.",
    color: "#FF6B9D",
    accentColor: "rgba(255, 107, 157, 0.15)",
  },
];

function TimelineNode({ evt, idx, isVisible }) {
  const isEven = idx % 2 === 0;

  return (
    <div
      className={`tl-node ${isVisible ? 'tl-node--visible' : ''}`}
      style={{
        '--delay': `${idx * 0.18}s`,
        '--accent': evt.color,
        '--accent-bg': evt.accentColor,
        '--step-num': `"${idx + 1}"`,
      }}
    >
      {/* Connector arm */}
      <div className={`tl-arm ${isEven ? 'tl-arm--left' : 'tl-arm--right'}`} />

      {/* Central dot */}
      <div className="tl-dot">
        <div className="tl-dot__inner" />
        <div className="tl-dot__ring" />
        <div className="tl-dot__ping" />
      </div>

      {/* Card — alternates left/right */}
      <div className={`tl-card ${isEven ? 'tl-card--left' : 'tl-card--right'}`}>
        <div className="tl-card__glow" />
        <div className="tl-card__top">
          <span className="tl-card__icon">{evt.icon}</span>
          <span className="tl-card__day">{evt.day}</span>
        </div>
        <h3 className="tl-card__title">{evt.title}</h3>
        <p className="tl-card__desc">{evt.desc}</p>
        <div className="tl-card__progress" />
      </div>
    </div>
  );
}

export default function Timeline() {
  const sectionRef = useRef(null);
  const [visibleNodes, setVisibleNodes] = useState([]);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.idx);
            setVisibleNodes((prev) => [...new Set([...prev, idx])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const nodes = sectionRef.current?.querySelectorAll('[data-idx]');
    nodes?.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, (vh - rect.top) / (rect.height + vh))
      );
      setLineProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="schedule" className="tl-section" ref={sectionRef}>
      {/* Background ambient orbs */}
      <div className="tl-orb tl-orb--1" />
      <div className="tl-orb tl-orb--2" />

      <div className="tl-header">
        <span className="tl-header__badge">SCHEDULE</span>
        <h2 className="tl-header__title">FESTIVAL CHRONICLES</h2>
        <p className="tl-header__sub">Four days. Infinite possibilities.</p>
      </div>

      <div className="tl-track">
        {/* Animated vertical spine */}
        <div className="tl-spine">
          <div
            className="tl-spine__fill"
            style={{ height: `${lineProgress * 100}%` }}
          />
          {/* Energy particle travelling the line */}
          <div
            className="tl-spine__orb"
            style={{ top: `${lineProgress * 95}%` }}
          />
        </div>

        {schedule.map((evt, idx) => (
          <div key={idx} data-idx={idx} className="tl-node-wrapper">
            <TimelineNode
              evt={evt}
              idx={idx}
              isVisible={visibleNodes.includes(idx)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
