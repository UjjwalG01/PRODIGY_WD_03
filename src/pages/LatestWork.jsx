import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

// images import
import work1 from "../assets/vfashion.jpg"
import work2 from "../assets/sample2.jpg"
import { WorkCard } from '../components/sections/WorkCard'

const LatestWork = () => {
    const [openWorks, setOpenWorks] = useState(false);

    const handleOpenMoreWorks = () => {
        setOpenWorks(!openWorks);
    }

    return (
        <section className='work-section' id='portfolio'>
            <div className="container">
                <h1 className='fw-semi-bold fs-medium mt-4 text-center'>My Latest Work</h1>
                <div
                    className="two-columns | work-portfolio">
                    <WorkCard
                        title={"A Frontend Fashion Shopping Site"}
                        description={`Frontend of an fashion ecommerce web application, developed from the Figma file provided by ${<a target='_blank' href='https://www.freefigmatemplates.com/#home-links'>Fee Figma Templates</a>}. The site displays the modern fashion desgins for the trendy clothes and fashion items. The app is optimized and has efficient user experience, worked for browser adaptability and fully responsive for most of the available devices.`}
                        img={work1}
                        techs={["React", "Figma", "CSS/SCSS"]}
                        github={"https://github.com/UjjwalG01/v-fashion-ecommerce.git"}
                        live={"https://vfashion-ecommerce.vercel.app/"}
                    />
                    <WorkCard
                        title={"A Fullstack Room Booking App (GRIHA)"}
                        description={"Node with Express as a backend and React as a frontend, the project developed as 6th sem college project, this web app is full stack project where person can host their rooms mentioning all the services and details which are available to the guests, and they can book as per their requirements. The app is fully functional where most of the functions of room booking system has been implemented."}
                        img={work2}
                        techs={["React", "Node", "CSS/SCSS"]}
                        github={"https://github.com/UjjwalG01/Bookstore-frontend.git"}
                        live={"https://github.com/UjjwalG01/Bookstore-frontend.git"}
                    />
                    {openWorks && (
                        <WorkCard
                            title={"A Fullstack Room Booking App (GRIHA)"}
                            description={"Node with Express as a backend and React as a frontend, the project developed as 6th sem college project, this web app is full stack project where person can host their rooms mentioning all the services and details which are available to the guests, and they can book as per their requirements. The app is fully functional where most of the functions of room booking system has been implemented."}
                            img={work2}
                            techs={["React", "Node", "CSS/SCSS"]}
                            github={"https://github.com/UjjwalG01/Bookstore-frontend.git"}
                            live={"https://github.com/UjjwalG01/Bookstore-frontend.git"}
                        />
                    )}

                    {openWorks && (
                        <WorkCard
                            title={"A Fullstack Room Booking App (GRIHA)"}
                            description={"Node with Express as a backend and React as a frontend, the project developed as 6th sem college project, this web app is full stack project where person can host their rooms mentioning all the services and details which are available to the guests, and they can book as per their requirements. The app is fully functional where most of the functions of room booking system has been implemented."}
                            img={work2}
                            techs={["React", "Node", "CSS/SCSS"]}
                            github={"https://github.com/UjjwalG01/Bookstore-frontend.git"}
                            live={"https://github.com/UjjwalG01/Bookstore-frontend.git"}
                        />
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