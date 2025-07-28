import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TecEx Medical</h3>
            <p>Advancing healthcare through innovative medical technology solutions.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Medical Equipment</li>
              <li>Healthcare Solutions</li>
              <li>Technical Support</li>
              <li>Training & Education</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>info@tecexmedical.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 TecEx Medical. All rights reserved.</p>
          <p className="footer-tagline">
            Made with <Heart size={16} className="heart-icon" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;