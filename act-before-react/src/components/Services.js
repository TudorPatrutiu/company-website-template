import React from 'react';
import { FaReact } from 'react-icons/fa'; // Example for React icon
import './Services.scss'; // Assuming you have an SCSS file for styles



function Services() {
  return (
    <div className="services">
      <div className="tech-icon"><FaReact /> React</div>
      <div className="tech-icon"><FaNodeJs /> Node.js</div>
      {/* Add more technologies */}
    </div>
  );
}

export default Services;
