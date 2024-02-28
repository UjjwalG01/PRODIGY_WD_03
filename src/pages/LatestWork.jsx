import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

// images import
import work1 from "../assets/vfashion.jpg"
import work2 from "../assets/sample2.jpg"
import work3 from "../assets/e-learning1.jpg"
import work4 from "../assets/sano-ai.jpg"
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
                        title={"AI SaaS Website (SANO-AI)"}
                        description={`SANO-AI is a SaaS website developed using OpenAI and Replicate API. It is capable of chatting with AI, generating code, images, videos with the prompt. This NextJS project has the free version and paid version of using AI, where the free version is available currently.`}
                        img={work4}
                        techs={["React", "Typescript", "Shadcn-UI", "NextJS"]}
                        github={"https://github.com/UjjwalG01/v-fashion-ecommerce.git"}
                        live={"https://sano-ai.vercel.app"}
                    />
                    <WorkCard
                        title={"SIKSHA Online Learning Web App"}
                        description={`SIKSHA E-Learning web app is a frontend project that contains different courses for the learners where all the available courses are available in courses pages and has the individual courses video material page. Once the subscription of the course is done you are able to access the courses.`}
                        img={work3}
                        techs={["React", "material-UI", "Tailwind", "framer-motion"]}
                        github={"https://github.com/UjjwalG01/v-fashion-ecommerce.git"}
                        live={"https://sikshalearningschool.vercel.app"}
                    />
                    <WorkCard
                        title={"A Frontend Fashion Shopping Site"}
                        description={`Frontend of an fashion ecommerce web application, developed from the Figma file provided by ${<a target='_blank' href='https://www.freefigmatemplates.com/#home-links'>Fee Figma Templates</a>}. The site displays the modern fashion desgins for the trendy clothes and fashion items. The app is optimized and has efficient user experience, worked for browser adaptability and fully responsive for most of the available devices.`}
                        img={work1}
                        techs={["React", "Figma", "CSS/SCSS"]}
                        github={"https://github.com/UjjwalG01/v-fashion-ecommerce.git"}
                        live={"https://vfashion-ecommerce.vercel.app"}
                    />
                    <WorkCard
                        title={"A Fullstack Room Booking App (GRIHA)"}
                        description={"Node with Express as a backend and React as a frontend, the project developed as 6th sem college project, this web app is full stack project where person can host their rooms mentioning all the services and details which are available to the guests, and they can book as per their requirements."}
                        img={work2}
                        techs={["React", "Node", "CSS/SCSS", "Express", "Bootstrap"]}
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