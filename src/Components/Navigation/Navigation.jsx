import React, { useState } from 'react';
import './Navigation.css';

const Navigation = ({ scrollToSection }) => {
  const myLinks = ['about', 'projects', 'blogs', 'contact'];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeLink, setActiveLink] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);
  const handleClick = (index) => {
    setActiveLink(index);
    scrollToSection(myLinks[index]);
  };

  return (
    <div>
      <ul className="nav-links">
        {myLinks.map((text, index) => {
          const isHovered = hoveredIndex === index;
          const isActive = activeLink === index;

          return (
            <li
              key={index}
              className={`nav-link ${isHovered || isActive ? 'nav-link-hover' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
            >
              {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
