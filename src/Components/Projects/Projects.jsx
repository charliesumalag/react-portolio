import React, {useState} from 'react'
import './Projects.css';


const Projects = ({id}) => {
    const items = [
        {
            image: '/Counting.png',
            title: 'Simple Stock Web Application',
            link: 'https://charliesumalag.github.io/CC03_PROJECT/',
            description: 'This Web Application lets users manage inventory by adding, removing, and updating items. It uses HTML, CSS, Phyton and PyScript for a user-friendly inventory tracking solution.',
            languages: ['HTML', 'CSS','JavaScript', 'PyScript', 'Phyton'],
        },
        {
            image: '/todoapp.png',
            title: 'Simple Todo Application',
            link: 'https://charliesumalagmyfirstreactapplication.netlify.app/',
            description: 'This is a To-Do application where users can add tasks, delete them, and mark tasks as complete by checking a checkbox, which underlines the text',
            languages: ['HTML', 'CSS', 'React JS']
        },
        {
            image: '/SimpleQuizApp.png',
            title: 'Simple Quiz Web Application',
            link: 'https://charliesumalag.github.io/Small-Project-Simple-Quiz-Web-App/',
            description: 'This web application presents multiple-choice questions, tracks the score, and displays the results at the end. It features a timer, dynamic question buttons, and a score counter for a user-friendly quiz experience.',
            languages: ['HTML', 'CSS', 'JavaScript']
        },

    ]
    const [hoveredIndex, setIsHoveredIndex] = useState(null);
    const handleMouseIn = (index) => {
        setIsHoveredIndex(index)
    }
    const handleMouseOut = () => {
        setIsHoveredIndex(null)
    }
    // fa-solid fa-arrow-right
  return (
    <div className='projects' id={id}>
        {items.map((item, index) => {
            return (
                <>
                    <a href={item.link} target='_blank' key={index}>
                    <div className={`item-project-container ${hoveredIndex === index ? 'hovered' : ''}`} onMouseEnter={() => handleMouseIn(index)} onMouseLeave={handleMouseOut}>
                        <div className='image-container'>
                            <img src={item.image} alt="" className='project-image' />
                        </div>
                        <div className='project-text-container'>
                            <div className={`title-container ${hoveredIndex === index ? 'color-hover' : ''}`} onMouseEnter={() => handleMouseIn(index)} onMouseLeave={handleMouseOut}>
                                <h4 className='project-title'>{item.title}</h4>
                                <i className={`fas fa-arrow-up ${hoveredIndex === index ? 'transform' : ''}`} onMouseEnter={() => handleMouseIn(index)} onMouseLeave={handleMouseOut}></i>
                            </div>
                            <p className='project-description'>{item.description}</p>
                        </div>
                        <div className="lanuages-container">
                            {item.languages.map((language) => {
                                return (
                                    <>
                                        <p className='btn'>{language}</p>
                                    </>
                            )
                        })}
                        </div>
                    </div>
                    </a>
                </>
            )
        })}

    </div>
  )
}

export default Projects
