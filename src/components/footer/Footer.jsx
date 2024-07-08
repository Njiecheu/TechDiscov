import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-title">FOR STUDENTS</h4>
          <a href="#!" className="footer-link">Degree Programs</a>
          <a href="#!" className="footer-link">Courses</a>
          <a href="#!" className="footer-link">Learning Experience</a>
          <a href="#!" className="footer-link">Forum</a>
          <a href="#!" className="footer-link">Student Blog</a>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">FOR EMPLOYERS</h4>
          <a href="#!" className="footer-link">Training & Recruitment Solutions</a>
          <a href="#!" className="footer-link">Knowledge Development</a>
          <a href="#!" className="footer-link">Skills Enhancement</a>
          <a href="#!" className="footer-link">Employer Blog</a>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">TECHDISCOV</h4>
          <a href="#!" className="footer-link">About Us</a>
          <a href="#!" className="footer-link">Join Us</a>
          <a href="#!" className="footer-link">Become a Mentor</a>
          <a href="#!" className="footer-link">Career Coach</a>
          <a href="#!" className="footer-link">Shop</a>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">HELP</h4>
          <a href="#!" className="footer-link">FAQ for Students</a>
          <a href="#!" className="footer-link">FAQ for Employers</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 TechDiscov. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
