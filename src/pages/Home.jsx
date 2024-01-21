import React from 'react'

import profile from "../assets/profile2.png"
import { SiReaddotcv } from 'react-icons/si'

const Home = () => {
    return (
        <section id='home'>
            <div className="container">
                <div className="two-columns | home-section">
                    <div className="intro-section">
                        <p className='fs-secondary-sm'>Hello I'm </p>
                        <h1 className='fs-primary fw-bold'>UJJWAL GIRI</h1>
                        <p className="fw-bold fs-medium">A WEB DEVELOPER</p>
                        <a target='_blank' className='no-underline' href="https://drive.google.com/file/d/1FCvTfWjf5ZCGsrTAUzihQQ0cS3z6MqNP/view?usp=sharing"><button className="button mt-3 | cv-btn">VIEW MY CV <SiReaddotcv /></button></a>
                    </div>
                    <div className="image-section">
                        <div className="image-clip">
                            <img src={profile} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home