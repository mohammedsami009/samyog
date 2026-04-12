import './Team.css';

export default function Team() {
  const teamMem = [
    { role: "Faculty Coordinator", name: "Dr. XYZ", dept: "ISE Dept" },
    { role: "Fest Convener", name: "John Doe", dept: "Core Team" },
    { role: "Technical Head", name: "Jane Smith", dept: "Core Team" },
  ];

  return (
    <section id="team" className="team-section">
      <h2 className="section-title">THE ARCHITECTS</h2>
      <div className="team-grid">
        {teamMem.map((m, i) => (
          <div key={i} className="team-card">
            <div className="profile-placeholder"></div>
            <h4>{m.name}</h4>
            <p className="role">{m.role}</p>
            <p className="dept">{m.dept}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
