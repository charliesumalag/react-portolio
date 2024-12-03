import React, {useState} from 'react'
import './Socials.css'

const Socials = () => {
    const icons = ['fa-brands fa-github', 'fa-brands fa-linkedin','fa-brands fa-instagram'];
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className='socials'>
        {icons.map((icon) => {
          return (
            <>
              <i className={`${icon} myicon ${isHovered ? 'myiconhover' : ''}`}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
            </>
          )
        })}
    </div>
  )
}

export default Socials
