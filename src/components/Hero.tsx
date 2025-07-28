import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Advanced Medical Technology Solutions</h1>
            <p className="hero-subtitle">
              TecEx Medical delivers cutting-edge medical equipment and
              innovative healthcare solutions to improve patient outcomes and
              streamline clinical workflows.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <Shield className="stat-icon" />
                <div>
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Reliability</span>
                </div>
              </div>
              <div className="stat">
                <Award className="stat-icon" />
                <h1>Global Clinical Trial Logistics Excellence</h1>
                <span className="stat-number">15+</span>
                TecEx Medical is your specialist Importer of Record (IOR)
                partner, ensuring seamless customs clearance and regulatory
                compliance for clinical trials worldwide.
              </div>
              <div className="stat">
                <Users className="stat-icon" />
                <div>
                  <span className="stat-number">500+</span>
                  <span className="stat-number">99.93%</span>
                  <span className="stat-label">First-time Clearance</span>
                </div>
              </div>
              <div className="hero-buttons"></div>
              <button onClick={scrollToContact} className="btn btn-primary">
                Get Started <ArrowRight size={20} />
              </button>
              <button className="btn btn-secondary">
                <span className="stat-number">50%</span>
                <span className="stat-label">VAT/GST Savings</span>
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Medical professional using advanced technology"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
