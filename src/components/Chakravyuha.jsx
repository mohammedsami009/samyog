import './Chakravyuha.css';

export default function Chakravyuha() {
  return (
    <section id="chakravyuha" className="chakra-section">
      <div className="chakra-container">
        <div className="ring ring-1">
           <span className="ring-label label-1">Round 1: Pravesh Dwar</span>
        </div>
        <div className="ring ring-2">
           <span className="ring-label label-2">Round 2: Maya Jaal</span>
        </div>
        <div className="ring ring-3">
           <span className="ring-label label-3">Round 3: Vijay Dwar</span>
        </div>

        <div className="chakra-core">
          <div className="core-text">
             <h3>CHAKRAVYUHA</h3>
             <p>28th April</p>
          </div>
        </div>
      </div>

      <div className="chakra-info">
        <h2 className="info-title">The Ultimate Tech Faceoff</h2>
        <h4 className="event-time">Event-3 • 28th April • 1:45 PM - 4:45 PM</h4>
        
        <div className="rounds-container">
          <div className="round-box">
             <h4>⚔️ ROUND 1: Pravesh Dwar</h4>
             <p className="brief-desc">Quiz & Logic. <em>"Only those worthy may enter..."</em></p>
          </div>
          <div className="round-box">
             <h4>🔮 ROUND 2: Maya Jaal</h4>
             <p className="brief-desc">Tricky Debugging. <em>"Not everything is as it seems..."</em></p>
          </div>
          <div className="round-box">
             <h4>🏆 ROUND 3: Vijay Dwar</h4>
             <p className="brief-desc">Final Coding Faceoff. <em>"Break through & claim victory."</em></p>
          </div>
        </div>
        <button className="register-btn cta-glow">Breach the System</button>
      </div>
    </section>
  );
}
