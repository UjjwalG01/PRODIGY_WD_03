import React from 'react'

import profile from "../assets/profile2.png"
import { SiReaddotcv } from 'react-icons/si'

const Home = () => {
    return (
        <section>
            <div className="container">
                <div className="two-columns | home-section">
                    <div className="intro-section">
                        <p className='fs-secondary-sm'>Hello I'm </p>
                        <h1 className='fs-primary fw-bold'>UJJWAL GIRI</h1>
                        <p className="fw-bold fs-medium">A WEB DEVELOPER</p>
                        <button className="button mt-3 | cv-btn">VIEW MY CV <SiReaddotcv /></button>
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