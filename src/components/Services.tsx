import React from 'react';
import { FileCheck, Globe, Shield, TrendingDown, Clock, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FileCheck size={40} />,
      title: "Importer of Record (IOR)",
      description: "Full legal responsibility for customs and regulatory compliance without taking ownership of your study materials."
    },
    {
      icon: <Shield size={40} />,
      title: "Customs & Regulatory",
      description: "End-to-end brokerage, clearance, import licenses, and GMP/GCP compliant handling of IMPs and biological samples."
    },
    {
      icon: <Globe size={40} />,
      title: "Global Reach",
      description: "Worldwide coverage across Europe, UK, Nordics, Canada, USA, LATAM, Asia-Pacific, and Australia/New Zealand."
    },
    {
      icon: <TrendingDown size={40} />,
      title: "VAT/GST Savings",
      description: "Proprietary schemes in 33+ countries that reduce import tax burden by up to 50%, and 68% in Switzerland."
    },
    {
      icon: <Clock size={40} />,
      title: "Fast Turnaround",
      description: "Budget quotes in 1.54 business days and average customs clearance in just 2.56 days."
    },
    {
      icon: <Users size={40} />,
      title: "Project Management",
      description: "Dedicated project management with weekly updates, live shipment tracking, and proactive communication."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive medical technology solutions tailored to your healthcare needs</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;