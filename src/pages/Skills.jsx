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
        <section>
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
                            <h1 className='fs-600'>Software Design</h1>
                            <p className='fs-small mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellat iste laboriosam modi consectetur earum?</p>
                        </div>
                        <div className="design-card | art-design">
                            <img src={img2} alt="Software design photo" />
                            <h1 className='fs-600'>Software Development</h1>
                            <p className='fs-small mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellat iste laboriosam modi consectetur earum?</p>
                        </div>
                        <div className="design-card | visual-design">
                            <img src={img3} alt="Software design photo" />
                            <h1 className='fs-600'>Web Hosting</h1>
                            <p className='fs-small mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellat iste laboriosam modi consectetur earum?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills