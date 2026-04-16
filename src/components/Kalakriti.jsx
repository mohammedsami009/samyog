import './Kalakriti.css';

export default function Kalakriti() {
  const events = [
    {
      hindi: 'रंगमंच',
      english: 'RangaManch',
      subtitle: 'Dramatics & Theatrics',
      icon: '🎭',
      desc: 'Step into the spotlight. Enact compelling stories and let your expressions captivate the audience in this ultimate battle of acting.'
    },
    {
      hindi: 'नृत्य',
      english: 'Nrittya',
      subtitle: 'Dance & Movement',
      icon: '💃',
      desc: 'Feel the rhythm of tradition. Bring the stage alive with dynamic group performances and traditional solo dance battles.'
    },
    {
      hindi: 'स्वर',
      english: 'Swara',
      subtitle: 'Music & Singing',
      icon: '🎵',
      desc: 'Let your voice echo through time. A musical harmony event celebrating classical roots and contemporary melodies.'
    },
    {
      hindi: 'परिधान',
      english: 'Paridhan',
      subtitle: 'Fashion Show',
      icon: '✨',
      desc: 'Walk the ramp showcasing a brilliantly curated fusion of majestic ethnic attire and modern fashion trends.'
    }
  ];

  return (
    <section id="culture" className="culture-section">
      <div className="culture-header">
        <h2 className="culture-title">The Grand Cultural Fiesta</h2>
        <p className="culture-subtitle">A Celebration of Arts and Traditions</p>
      </div>

      <div className="accordion-container">
        {events.map((ev, idx) => (
          <div className={`acc-panel panel-${idx+1}`} key={idx}>
             <div className="hindi-bg-text">{ev.hindi}</div>
             <div className="acc-icon">{ev.icon}</div>
             <div className="acc-content">
                <div className="event-title-group">
                  <span className="hindi-inline">{ev.hindi}</span>
                  <span className="dot-separator">•</span>
                  <h4 className="english-inline">{ev.english}</h4>
                </div>
                <p className="event-subtitle">{ev.subtitle}</p>
                <div className="event-desc-wrapper">
                  <p className="event-desc">{ev.desc}</p>
                  <button className="register-btn culture-cta">Participate</button>
                </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
