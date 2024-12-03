import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='picture-container'>
        <img src="picture.jpg" alt="" className='p-picture' />
      </div>
        <h1 className='header-text'>Charlie Sumalag</h1>
        <p className='sub-text'>Web Developer</p>
        <p className='description-text'>A passionate Web Developer, based in the Philippines. </p>
    </div>
  )
}

export default Header
