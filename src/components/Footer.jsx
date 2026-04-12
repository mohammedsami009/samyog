import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
           <h2>SAMYOG 2026</h2>
           <p>When Culture Meets Code</p>
        </div>
        <div className="footer-links">
           <a href="#about">About</a>
           <a href="#events">Events</a>
           <a href="#chakravyuha">Chakravyuha</a>
        </div>
        <div className="footer-contact">
           <p>Dept. of ISE, JSSATE Bengaluru</p>
           <p>Email: contact@samyog.com</p>
        </div>
      </div>
      <div className="footer-bottom">
         <p>&copy; 2026 Samyog Core Team. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
