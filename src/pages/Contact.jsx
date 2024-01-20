import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <section className='section-contact-main'>
            <div className="container">
                <div className="contact-section">
                    <div className="contact-info-section">
                        <div className="content">
                            <h2 className='fs-medium fw-bold'>Let's work together</h2>
                            <p className='fs-small fw-semi-bold mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ullam necessitatibus consequatur deserunt. Autem expedita suscipit ullam omnis!</p>
                        </div>
                        <div className="social-links">
                            <span><FaGithub /></span>
                            <span><FaInstagram /></span>
                            <span><FaLinkedin /></span>
                            <span><FaDiscord /></span>
                        </div>
                    </div>
                    <div className="contact-form-section">
                        <div className="contact-form">
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                            <textarea name="message" placeholder='Type your message here' rows="6"></textarea>
                            <button className="button | mt-2">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact