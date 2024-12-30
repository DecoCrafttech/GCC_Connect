import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        {/* Left Side */}
        <div className="stats">
          <div className="stat-card">
            <h1>1,784</h1>
            <p>Satisfied and happy clients we have served all over the world.</p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="info">
          <h3>About Us</h3>
          <p className="description">
            Our leaders have a collective experience of 400 years together in cross-functional domain areas.
          </p>
          <ul className="features">
            <li>
              <span className="circle"></span> Highly qualified consultants at service.
            </li>
            <li>
              <span className="circle"></span> Highly qualified consultants at service.
            </li>
            <li>
              <span className="circle"></span> Highly qualified consultants at service.
            </li>
            <li>
              <span className="circle"></span> Highly qualified consultants at service.
            </li>
          </ul>
          <div className="buttons">
            <button className="contact-btn">Contact Us</button>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
