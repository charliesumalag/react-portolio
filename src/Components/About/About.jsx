import React from 'react'
import './About.css'

const About = ({ id }) => {
    const aboutme1 = `Hi, I'm Charlie Sumalag, a recent BSIT graduate passionate about web development. I've honed skills in programming, web design, and problem-solving, and I'm excited to apply my knowledge to innovative projects in the tech industry.`

    const aboutme2 = `During my studies, I gained experience in front-end and back-end development, working with HTML, CSS, JavaScript, React, and databases. Through projects and collaboration, I developed a passion for creating interactive websites and improved my teamwork skills.`

    const aboutme3 = `As a recent graduate, I'm eager to grow as a web developer and tackle real-world challenges. I'm excited to expand my skills in both front-end and back-end development and contribute to meaningful projects in the tech industry.`
    const abouts = [aboutme1,aboutme2,aboutme3]
  return (
    <div className='about-container' id={id}>
        {abouts.map((about, index) => {
            return (
                <p className='about-text' key={index}>{about}</p>
            )
        })}
    </div>
  )
}

export default About
