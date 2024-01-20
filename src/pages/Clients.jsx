import React from 'react'
import { MdStarRate } from "react-icons/md";

// Images imported 
import client1 from "../assets/client1.png"
import client2 from "../assets/client2.png"
import client3 from "../assets/client3.png"

const Clients = () => {
    return (
        <section>
            <div className="container">
                <h1 className='fw-semi-bold fs-600 mt-4 text-center'>Worked for</h1>
                <div className="centered-content">
                    <div className="three-columns | centered-column">
                        <div className="client-card">
                            <p className='fs-500 fw-semi-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt esse corporis asperiores?</p>
                            <div className="client-info">
                                <img src={client1} alt="" />
                                <div className="client-text">
                                    <span className='flex'>
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                    </span>
                                    <h3 className='fs-small fw-semi-bold'>Gemma Nolen</h3>
                                    <p className='fs-x-small'>Google</p>
                                </div>
                            </div>
                        </div>
                        <div className="client-card">
                            <p className='fs-500 fw-semi-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt esse corporis asperiores?</p>
                            <div className="client-info">
                                <img src={client2} alt="" />
                                <div className="client-text">
                                    <span className='flex'>
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                    </span>
                                    <h3 className='fs-small fw-semi-bold'>Gemma Nolen</h3>
                                    <p className='fs-x-small'>Google</p>
                                </div>
                            </div>
                        </div>
                        <div className="client-card">
                            <p className='fs-500 fw-semi-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt esse corporis asperiores?</p>
                            <div className="client-info">
                                <img src={client3} alt="" />
                                <div className="client-text">
                                    <span className='flex'>
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                    </span>
                                    <h3 className='fs-small fw-semi-bold'>Gemma Nolen</h3>
                                    <p className='fs-x-small'>Google</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients