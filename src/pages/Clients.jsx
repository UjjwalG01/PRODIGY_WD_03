import React from 'react'
import { MdStarRate } from "react-icons/md";

// Images imported 
import client1 from "../assets/client1.png"
import client2 from "../assets/client2.png"
import client3 from "../assets/client3.png"

const Clients = () => {
    return (
        <section id='clients'>
            <div className="container">
                <h1 className='fw-semi-bold fs-medium mt-4 text-center'>Clients Worked For</h1>
                <div className="centered-content">
                    <div className="three-columns | centered-column">
                        <div className="client-card">
                            <p className='fs-500 fw-semi-bold'>This is a sample review, generated to occupy some of the spaces of the card. This is not an actual review and have not worked for this clients.</p>
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
                            <p className='fs-500 fw-semi-bold'>This is a sample review, generated to occupy some of the spaces of the card. This is not an actual review and have not worked for this clients.</p>
                            <div className="client-info">
                                <img src={client2} alt="" />
                                <div className="client-text">
                                    <span className='flex'>
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                    </span>
                                    <h3 className='fs-small fw-semi-bold'>Chris Dale</h3>
                                    <p className='fs-x-small'>IBM</p>
                                </div>
                            </div>
                        </div>
                        <div className="client-card">
                            <p className='fs-500 fw-semi-bold'>This is a sample review, generated to occupy some of the spaces of the card. This is not an actual review and have not worked for this clients.</p>
                            <div className="client-info">
                                <img src={client3} alt="" />
                                <div className="client-text">
                                    <span className='flex'>
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                    </span>
                                    <h3 className='fs-small fw-semi-bold'>John Doe</h3>
                                    <p className='fs-x-small'>Microsoft</p>
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