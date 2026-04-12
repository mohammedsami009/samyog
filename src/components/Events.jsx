import { useState } from 'react';
import './Events.css';

const EventCard = ({ evt }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`event-card-container ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="event-card-inner">
        <div className="event-card-front">
          <div className="card-content">
            <h3>{evt.name}</h3>
            <p>{evt.desc}</p>
            <span className="flip-hint">Click to flip</span>
          </div>
        </div>

        <div className="event-card-back" style={evt.img ? { backgroundImage: `url("${evt.img}")` } : {}}>
          {!evt.img && <span className="no-poster">Poster unavailable</span>}
        </div>
      </div>
    </div>
  );
};

export default function Events() {
  const [activeTab, setActiveTab] = useState('Tech Details');

  const eventData = {
    'Tech Details': [
      { name: "Chakravyuha", desc: "The Ultimate Tech Faceoff. Navigate through Logic, Coding, and Debugging.", img: "/Assets/WhatsApp Image 2026-04-11 at 10.31.23 PM.jpeg" },
      { name: "Retro Code Bash", desc: "Blend the old with the new in a legendary hackathon.", img: "/Assets/WhatsApp Image 2026-04-11 at 10.31.33 PM.jpeg" },
      { name: "Pixels & Patterns", desc: "UI/UX Design competition exploring cultural Indian motifs.", img: "/Assets/WhatsApp Image 2026-04-11 at 10.32.36 PM.jpeg" }
    ],
    'Culturals': [
      { name: "Symphony of Souls", desc: "Classical and modern singing competition.", img: "/Assets/WhatsApp Image 2026-04-12 at 11.33.34 AM.jpeg" },
      { name: "Nritya", desc: "Solo and group dancing faceoff across traditional and western forms.", img: "/Assets/WhatsApp Image 2026-04-11 at 10.31.23 PM.jpeg" },
      { name: "Vogue", desc: "The flagship fashion walk combining traditional weaves with modern cuts.", img: "/Assets/WhatsApp Image 2026-04-11 at 10.31.33 PM.jpeg" }
    ],
    'Sports Arena': [
      { name: "Field Events", desc: "High-octane Cricket and Basketball tournaments.", img: "/Assets/WhatsApp Image 2026-04-11 at 10.32.36 PM.jpeg" },
      { name: "Indoor Strategies", desc: "Masterful Chess and Carrom championships.", img: "/Assets/WhatsApp Image 2026-04-12 at 11.33.34 AM.jpeg" },
      { name: "Tug of War", desc: "A test of raw coordinated strength between top teams.", img: "/Assets/WhatsApp Image 2026-04-11 at 10.31.23 PM.jpeg" }
    ],
    'NCAIT Conference': [
      { name: "NCAIT-2026", desc: "The 12th National Conference on Advancements in Information Technology.", img: "/Assets/WhatsApp Image 2026-04-11 at 10.31.33 PM.jpeg" },
      { name: "Core Theme", desc: "Role of AI in Cyber Security. Witness breakthrough presentations.", img: "/Assets/WhatsApp Image 2026-04-11 at 10.32.36 PM.jpeg" },
      { name: "Paper Presentations", desc: "50+ teams showcasing premium research in renowned journals.", img: "/Assets/WhatsApp Image 2026-04-12 at 11.33.34 AM.jpeg" }
    ]
  };

  return (
    <section id="events" className="events-section">
      <h2 className="section-title">THE GRAND SHOWCASE</h2>
      
      <div className="events-tabs">
        {Object.keys(eventData).map(tab => (
          <button 
            key={tab} 
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="events-grid">
        {eventData[activeTab].map((evt, idx) => (
          <EventCard key={idx} evt={evt} />
        ))}
      </div>
    </section>
  );
}
