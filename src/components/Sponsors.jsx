import './Sponsors.css';

export default function Sponsors() {
  const sponsors = [
    { tier: "Title Sponsor", price: "Entire Event", benefits: "Powered by Branding, Logo on all merch, Prime Booth" },
    { tier: "Platinum Sponsor", price: "₹90,000", benefits: "Logo on posters, Dedicated stall, Social promotions" },
    { tier: "Gold Sponsor", price: "₹50,000", benefits: "Social media mentions, Stall space, Online branding" },
    { tier: "Silver Sponsor", price: "₹25,000", benefits: "Logo on specific posters, Segment branding" },
    { tier: "Event Partner", price: "Supporting", benefits: "Certificates of sponsorship, Social media posts" }
  ];

  return (
    <section id="sponsors" className="sponsors-section">
      <h2 className="section-title">SPONSORSHIP TIER PACKAGES</h2>
      <div className="sponsors-grid">
        {sponsors.map((s, i) => (
          <div key={i} className={`sponsor-card ${s.tier.split(' ')[0].toLowerCase()}`}>
             <div className="tier-header">
                <h3>{s.tier}</h3>
                <span className="price">{s.price}</span>
             </div>
             <p className="benefits">{s.benefits}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
