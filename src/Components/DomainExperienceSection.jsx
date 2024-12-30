import React from 'react';

const DomainExperienceSection = () => {
  const domains = [
    { title: "Legal Compliances", icon: "⚖️" },
    { title: "Taxation", icon: "💼" },
    { title: "HRBP", icon: "📊" },
    { title: "Talent Acquisition", icon: "👥" },
    { title: "Product Management", icon: "📦" },
    { title: "Real Estate", icon: "🏢" },
    { title: "Software Engineering", icon: "💻" },
    { title: "Engineering Research & Development", icon: "🔬" },
    { title: "Digital Services & Internet Technology", icon: "🌐" },
  ];

  return (
    <section className="domain-section  ">
      <div className="domain-header  mt-5">
        <p>We build trust and maintain long-lasting relations!</p>
        <h3>
        Our leaders have a collective experience of 400 years together in cross functional domain areas.        </h3>
      </div>
      <div className="domain-grid mt-5">
  <div className="domain-row  mt-5">
    {domains.slice(0, 5).map((domain, index) => (
      <div key={index} className="domain-card">
        <div className="domain-icon">{domain.icon}</div>
        <p>{domain.title}</p>
      </div>
    ))}
  </div>
  <div className="domain-row  mt-5 mb-5">
    {domains.slice(5).map((domain, index) => (
      <div key={index} className="domain-card">
        <div className="domain-icon">{domain.icon}</div>
        <p>{domain.title}</p>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default DomainExperienceSection;
