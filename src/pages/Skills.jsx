import React, { useEffect, useRef } from 'react';

// Images import
import img1 from "../assets/SoftwareDesign.png"
import img2 from "../assets/SoftwareDevelopment.png"
import img3 from "../assets/WebHosting.png"
import { SkillItem } from '../components/sections/SkillItem';

const Skills = () => {
    const listRef = useRef();

    useEffect(() => {
        const list = listRef.current;
        const scrollWidth = list.scrollWidth;
        const clientWidth = list.clientWidth;
        const scrollSpeed = 50;
        let scrollAmount = 0;

        function scroll() {
            list.scrollTo(scrollAmount, 0);
            scrollAmount += 1;

            if (scrollAmount > scrollWidth - clientWidth) {
                scrollAmount = 0;
            }
        }
        const intervalId = setInterval(scroll, scrollSpeed)
        return () => clearInterval(intervalId);
    }, [])
    return (
        <section id='skills'>
            <div className="no-container">
                <div className="skill-page">
                    <ul ref={listRef} role='list' className='skill-icons'>
                        <SkillItem to={"#"} />
                        <SkillItem to={"#"} />
                    </ul>
                </div>
                <div className="container">
                    <div className="skill-cards">
                        <div className="design-card | product-design">
                            <img src={img1} alt="Software design photo" />
                            <h1 className='fs-medium'>Software Design</h1>
                            <p className='fs-small mt-2'>I'm able to design architecture, components,
                                interfaces, and other characteristics of a software system.
                                I have used different approaches, including
                                object-oriented design and functional design
                                architecture.</p>
                        </div>
                        <div className="design-card | art-design">
                            <img src={img2} alt="Software design photo" />
                            <h1 className='fs-medium'>Software Development</h1>
                            <p className='fs-small mt-2'>I have written code, debugged, tested,
                                and deployed software using some of programming languages, tools,
                                and frameworks. I am confident in my ability to create software systems
                                that are efficient and effective</p>
                        </div>
                        <div className="design-card | visual-design">
                            <img src={img3} alt="Software design photo" />
                            <h1 className='fs-medium'>Web Hosting</h1>
                            <p className='fs-small mt-2'>I also help in web hosting,
                                which is the service of providing storage space and access for
                                websites on the internet.  I have helped clients choose the right
                                type of hosting based on their needs, the amount of traffic they
                                receive.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills