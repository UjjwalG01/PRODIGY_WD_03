import React, { useEffect, useRef } from 'react';
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";

// Images import
import img1 from "../assets/Software-design.png"
import img2 from "../assets/Software-development.png"
import img3 from "../assets/web-hosting.png"

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
                        <li><a href="#"><FaHtml5 className="icon html" /></a></li>
                        <li><a href="#"><FaCss3Alt className="icon css" /></a></li>
                        <li><a href="#"><BiLogoJavascript className="icon js" /></a></li>
                        <li><a href="#"><FaReact className="icon react" /></a></li>
                        <li><a href="#"><SiTailwindcss className="icon tailwind" /></a></li>
                        <li><a href="#"><FaBootstrap className="icon bootstrap" /></a></li>
                        <li><a href="#"><FaNodeJs className="icon node" /></a></li>
                        <li><a href="#"><FaGitAlt className="icon git" /></a></li>
                        <li><a href="#"><SiMongodb className="icon mongo" /></a></li>
                        <li><a href="#"><SiMysql className="icon mysql" /></a></li>

                        <li><a href="#"><FaHtml5 className="icon html" /></a></li>
                        <li><a href="#"><FaCss3Alt className="icon css" /></a></li>
                        <li><a href="#"><BiLogoJavascript className="icon js" /></a></li>
                        <li><a href="#"><FaReact className="icon react" /></a></li>
                        <li><a href="#"><SiTailwindcss className="icon tailwind" /></a></li>
                        <li><a href="#"><FaBootstrap className="icon bootstrap" /></a></li>
                        <li><a href="#"><FaNodeJs className="icon node" /></a></li>
                        <li><a href="#"><FaGitAlt className="icon git" /></a></li>
                        <li><a href="#"><SiMongodb className="icon mongo" /></a></li>
                        <li><a href="#"><SiMysql className="icon mysql" /></a></li>
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