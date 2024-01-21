import React, { useState } from 'react'
import { FaArrowRight, FaCodeBranch, FaLocationArrow } from 'react-icons/fa'

// images import
import work1 from "../assets/vfashion.jpg"
import work2 from "../assets/sample2.jpg"

const LatestWork = () => {
    const [openWorks, setOpenWorks] = useState(false);

    const handleOpenMoreWorks = () => {
        setOpenWorks(!openWorks);
    }

    return (
        <section className='work-section' id='portfolio'>
            <div className="container">
                <h1 className='fw-semi-bold fs-medium mt-4 text-center'>My Latest Work</h1>
                <div className="two-columns | work-portfolio">
                    <div className="work-card">
                        <img src={work1} alt="" />
                        <h2 className='fs-small mt-2 fw-bold'>A Frontend Fashion Shopping Site</h2>
                        <p className='fs-x-small fw-regular'>Frontend of an fashion ecommerce web application, developed from
                            the Figma file provided by <a href="https://www.freefigmatemplates.com/#home-links">Fee Figma
                                Templates</a>. The site displays the modern fashion desgins for the trendy clothes and fashion items.
                            The app is optimized and has efficient user experience, worked for browser adaptability and fully responsive
                            for most of the available devices.</p>
                        <ul role='list' className='tech-stack'>
                            <li>React</li>
                            <li>Node/Express</li>
                            <li>CSS/SCSS</li>
                        </ul>
                        <div className="btn-link">
                            <a className='no-underline' target='_blank' href="#"><button className='button flex'>Code <FaCodeBranch /></button></a>
                            <a className='no-underline' target='_blank' href="https://vfashion-ecommerce.vercel.app/"><button className='button flex'>Go Live <FaLocationArrow /></button></a>
                        </div>
                    </div>
                    <div className="work-card">
                        <img src={work2} alt="" />
                        <h2 className='fs-small mt-2 fw-bold'>A Fullstack Room Booking App (GRIHA)</h2>
                        <p className='fs-x-small fw-regular'>Node with Express as a backend and React as a frontend, the project developed
                            as 6th sem college project, this web app is full stack project where person can host their rooms mentioning all the
                            services and details which are available to the guests, and they can book as per their requirements. The app is fully
                            functional where most of the functions of room booking system has been implemented.</p>
                        <ul role='list' className='tech-stack'>
                            <li>React</li>
                            <li>Node/Express</li>
                            <li>CSS/SCSS</li>
                        </ul>
                        <div className="btn-link">
                            <a className='no-underline' target='_blank' href="#"><button className='button flex'>Code <FaCodeBranch /></button></a>
                            <a className='no-underline' target='_blank' type='disabled' href="#"><button className='button flex'>Go Live <FaLocationArrow /></button></a>
                        </div>
                    </div>
                    {openWorks && (
                        <div className="work-card">
                            <img src={work2} alt="" />
                            <h2 className='fs-small mt-2 fw-bold'>A Fullstack Room Booking App (GRIHA)</h2>
                            <p className='fs-x-small fw-regular'>Node with Express as a backend and React as a frontend, the project developed
                                as 6th sem college project, this web app is full stack project where person can host their rooms mentioning all the
                                services and details which are available to the guests, and they can book as per their requirements. The app is fully
                                functional where most of the functions of room booking system has been implemented.</p>
                            <ul role='list' className='tech-stack'>
                                <li>React</li>
                                <li>Node/Express</li>
                                <li>CSS/SCSS</li>
                            </ul>
                            <div className="btn-link">
                                <a className='no-underline' target='_blank' href="#"><button className='button flex'>Code <FaCodeBranch /></button></a>
                                <a className='no-underline' target='_blank' href="#"><button className='button flex'>Go Live <FaLocationArrow /></button></a>
                            </div>
                        </div>
                    )}

                    {openWorks && (
                        <div className="work-card">
                            <img src={work2} alt="" />
                            <h2 className='fs-small mt-2 fw-bold'>A Fullstack Room Booking App (GRIHA)</h2>
                            <p className='fs-x-small fw-regular'>Node with Express as a backend and React as a frontend, the project developed
                                as 6th sem college project, this web app is full stack project where person can host their rooms mentioning all the
                                services and details which are available to the guests, and they can book as per their requirements. The app is fully
                                functional where most of the functions of room booking system has been implemented.</p>
                            <ul role='list' className='tech-stack'>
                                <li>React</li>
                                <li>Node/Express</li>
                                <li>CSS/SCSS</li>
                            </ul>
                            <div className="btn-link">
                                <a className='no-underline' target='_blank' href="#"><button className='button flex'>Code <FaCodeBranch /></button></a>
                                <a className='no-underline' target='_blank' href="#"><button className='button flex'>Go Live <FaLocationArrow /></button></a>
                            </div>
                        </div>
                    )}
                </div>
                <div className="show-more">
                    {openWorks ?
                        <button onClick={handleOpenMoreWorks} className="button button-reverse flex fs-x-small">See Less</button> :
                        <button onClick={handleOpenMoreWorks} className="button button-reverse flex fs-x-small">See More <FaArrowRight /></button>
                    }
                </div>
            </div>
        </section >
    )
}

export default LatestWork