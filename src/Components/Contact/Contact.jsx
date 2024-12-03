import React from 'react'
import "./Contact.css";

const Contact = ({id}) => {
    const headText = `Let's Talk.`
  return (
    <div id={id} className='contact-container'>
        <h2>{headText}</h2>
        <p className="c-subtext">New projects, please send me a mesage.</p>
        <form autoComplete="off">
            <div className="input-container">
                <label htmlFor="">Name *</label>
                <input type="text" className='name-input' />
            </div>
            <div className="input-container">
                <label htmlFor="email">Email *</label>
                <input type="email" className='name-input' autoComplete="new-email"/>
            </div>
            <div className="input-container">
                <label htmlFor="">Message *</label>
                <textarea type="text" className='name-input' />
            </div>
            <button className='btn-send-message'>Send Message</button>

        </form>
    </div>
  )
}

export default Contact
