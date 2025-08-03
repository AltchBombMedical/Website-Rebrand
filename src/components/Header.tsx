import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <h2>TecEx Medical</h2>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li>
              <a
                href="#home"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
