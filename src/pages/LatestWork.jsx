import React from 'react'
import { FaCodeBranch, FaLocationArrow } from 'react-icons/fa'

// images import
import work1 from "../assets/vfashion.jpg"
import work2 from "../assets/sample2.jpg"

const LatestWork = () => {
    return (
        <section className='work-section'>
            <div className="container">
                <h1 className='fw-semi-bold fs-600 mt-4 text-center'>My Latest Work</h1>
                <div className="two-columns | work-portfolio">
                    <div className="work-card">
                        <img src={work1} alt="" />
                        <h2 className='fs-small mt-2 fw-bold'>A Frontend Fashion Shopping Site</h2>
                        <p className='fs-x-small fw-regular'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam accusamus similique tenetur dicta quasi amet, possimus ipsam deserunt quos odio.</p>
                        <ul role='list' className='tech-stack'>
                            <li>React</li>
                            <li>Node/Express</li>
                            <li>CSS/SCSS</li>
                        </ul>
                        <div className="btn-link">
                            <a className='no-underline' href="#"><button className='button flex'>Code <FaCodeBranch /></button></a>
                            <a className='no-underline' href="#"><button className='button flex'>Go Live <FaLocationArrow /></button></a>
                        </div>
                    </div>
                    <div className="work-card">
                        <img src={work2} alt="" />
                        <h2 className='fs-small mt-2 fw-bold'>A Frontend Fashion Shopping Site</h2>
                        <p className='fs-x-small fw-regular'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam accusamus similique tenetur dicta quasi amet, possimus ipsam deserunt quos odio.</p>
                        <ul role='list' className='tech-stack'>
                            <li>React</li>
                            <li>Node/Express</li>
                            <li>CSS/SCSS</li>
                        </ul>
                        <div className="btn-link">
                            <a className='no-underline' href="#"><button className='button flex'>Code <FaCodeBranch /></button></a>
                            <a className='no-underline' href="#"><button className='button flex'>Go Live <FaLocationArrow /></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestWork