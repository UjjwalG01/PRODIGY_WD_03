import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import Navlink from './NavLink';
import { BiMenuAltRight } from 'react-icons/bi';
import { motion, useSpring, useMotionValue } from "framer-motion"

// Images imported
import logo from "../assets/logo3.png";

const Header = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <header className={`primary-header`}>
            <div className="container">
                <div className="nav-wrapper">
                    <Link className="logo fw-bold" to={"/"}>
                        <img className="logo-icon" src={logo} alt="Logo" />
                    </Link>
                    <button onClick={() => setClicked(!clicked)} className="mobile-nav-toggle" aria-controls="primary-navigation">
                        {clicked ? (
                            <MdClose onClick={() => setClicked(false)} className="icon icon-close" />
                        ) : (
                            <BiMenuAltRight onClick={() => setClicked(true)} className="icon icon-hamburger" />
                        )}
                        <span className="visually-hidden">Menu</span>
                    </button>
                    <nav className={`primary-navigation ${clicked === true ? "show" : ""}`} id="primary-navigation">
                        <motion.ul
                            initial={{ height: 0 }}
                            animate={{ height: clicked ? "auto" : 1 }}
                            exit={{ height: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
                            role="list"
                            className="nav-list">
                            <Navlink onClick={() => setClicked(false)} href={"home"} label={"Home"} />
                            <Navlink onClick={() => setClicked(false)} href={"skills"} label={"Skills"} />
                            <Navlink onClick={() => setClicked(false)} href={"portfolio"} label={"Portfolio"} />
                            <Navlink onClick={() => setClicked(false)} href={"contact"} label={"Contact"} />
                        </motion.ul>
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default Header