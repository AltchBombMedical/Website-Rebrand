import React from 'react';
import { CheckCircle, Target, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target size={24} />,
      title: "Risk Removal",
      description: "100% risk removed from local sites plus 15-20% PM workload reduction for sponsors."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Proven Performance",
      description: "99.93% first-time clearance rate with identical SIV-date success metrics."
    },
    {
      icon: <Globe size={24} />,
      title: "Global Expertise",
      description: "Clinical-trial-specific knowledge of GMP/GCP, IND requirements across all regions."
    },
    {
      icon: <Zap size={24} />,
      title: "Comprehensive Support",
      description: "From IMPs to diagnostic equipment, we handle all study materials with expert care."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2>About TecEx Medical</h2>
              <p>Leading the future of medical technology</p>
            </div>
            
            <div className="about-description">
              <p>
                TecEx Medical is the specialist Importer of Record (IOR) partner for global clinical trials, 
                taking full legal responsibility for customs and regulatory compliance while you maintain 
                ownership of your study materials.
              </p>
              <p>
                We orchestrate every regulatory and customs step, reduce import-tax exposure across 30+ 
                jurisdictions, and deliver near-perfect clearance KPIs with proactive project management—so 
                sponsors and CROs can focus on science, not shipping.
              </p>
            </div>

            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-item">
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <div className="value-content">
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Medical team collaborating with technology"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;