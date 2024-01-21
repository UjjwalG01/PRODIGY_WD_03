import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <section className='section-contact-main' id='contact'>
            <div className="container">
                <div className="contact-section">
                    <div className="contact-info-section">
                        <div className="content">
                            <h2 className='fs-medium fw-bold'>Let's work together</h2>
                            <p className='fs-small fw-semi-bold mt-2 justify'>Hello, I'm a developer with experience in web development, app development, web hosting and more. I'm passionate about creating innovative solutions to complex problems and am always looking for new challenges. If you're interested in working together on a project or want a project developer, please feel free to connect with me on the following links. You can also reach out to me by sending a message with your name and email through the contact form aside.</p>
                        </div>
                        <div className="social-links">
                            <span><a target='_blank' className='dark' href="https://github.com/UjjwalG01"><FaGithub /></a></span>
                            <span><a target='_blank' className='dark' href="https://www.instagram.com/__ujjwal_giri?igsh=MW1ybDc0NmV4a3M4Mw=="><FaInstagram /></a></span>
                            <span><a target='_blank' className='dark' href="linkedin.com/in/its-ujjwal-giri"><FaLinkedin /></a></span>
                            <span><a target='_blank' className='dark' href="https://discord.com/channels/1059151739149897808/1059151739149897811"><FaDiscord /></a></span>
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