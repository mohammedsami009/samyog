import './Timeline.css';

export default function Timeline() {
  const schedule = [
    { day: "April 27th", title: "Sports Arena", desc: "Kickoff with intense Cricket, Basketball, Chess, Carrom, and Tug of War tournaments." },
    { day: "April 28th", title: "Tech & Sports", desc: "Technical events including Chakravyuha begin, alongside thrilling sports finals." },
    { day: "April 29th", title: "NCAIT-2026", desc: "12th National Conference focusing on the monumental Role of AI in Cyber Security." },
    { day: "April 30th", title: "Cultural Extravaganza", desc: "Singing, dancing, and fashion walk. The grand closing valedictory." }
  ];

  return (
    <section id="schedule" className="timeline-section">
      <h2 className="section-title">FESTIVAL CHRONICLES</h2>
      <div className="circuit-timeline">
        <div className="main-bus"></div>
        {schedule.map((evt, idx) => (
          <div key={idx} className={`timeline-node node-${idx}`}>
            <div className="node-point"></div>
            <div className="node-content">
              <h3>{evt.day}</h3>
              <h4>{evt.title}</h4>
              <p>{evt.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
