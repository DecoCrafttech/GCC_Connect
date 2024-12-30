import React from 'react';
import { FaBrain, FaBuilding, FaChartLine } from 'react-icons/fa';

const AboutComponent = () => {
    return (
        <section className="about-section">
            <div className="about-header mt-5 mb-5">
                <p>Helping in making smart decisions.</p>
                <h2>Putting the right solutions and methods in place.</h2>
            </div>
            <div className="about-container mb-5">
                {/* Card 1 */}
                <div className="about-card">
                    <div className="icon green">
                        <FaBrain size={40} />
                    </div>
                    <h3>CAPTIVE MODEL</h3>
                    <p>
                        In this model, GCC operates as a subsidiary that the parent company fully owns. The parent company retains complete control over the GCC's operations, strategy, and decision-making.
                    </p>
                    <div className='text-start'>
                    <a href="#" className="learn-more">
                        Explore More <span>&rarr;</span>
                    </a>
                    </div>
                    
                </div>

                {/* Card 2 */}
                <div className="about-card">
                    <div className="icon blue">
                        <FaBuilding size={40} />
                    </div>
                    <h3>SHARED SERVICES MODEL</h3>
                    <p>
                        In this model, our team will take care of the legal and administrative responsibilities related to the employment of the company’s employees.
                    </p>
                    <div className='text-start'>
                    <a href="#" className="learn-more">
                        Explore More <span>&rarr;</span>
                    </a>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="about-card">
                    <div className="icon gray">
                        <FaChartLine size={40} />
                    </div>
                    <h3>BUILD OPERATE TRANSFER MODEL</h3>
                    <p>
                        In this model, our team will be setting up and running the GCC on behalf of the client. Ownership will be transferred after a predefined time period.
                    </p>
                    <div className='text-start col-12 '>
                    <a href="#" className="learn-more">
                        Explore More <span>&rarr;</span>
                    </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutComponent;
