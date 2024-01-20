import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Navlink from './NavLink';
import { BiMenuAltRight } from 'react-icons/bi';

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
                        {/* <span className="fs-500 fw-bold">DEV_UG</span> */}
                    </Link>
                    <button onClick={() => setClicked(!clicked)} className="mobile-nav-toggle" aria-controls="primary-navigation">
                        {clicked ? (
                            <MdClose className="icon icon-close" />
                        ) : (
                            <BiMenuAltRight className="icon icon-hamburger" />
                            // <GiHamburgerMenu className="icon icon-hamburger" />
                        )}
                        <span className="visually-hidden">Menu</span>
                    </button>
                    <nav className={`primary-navigation`} id="primary-navigation">
                        <ul role="list" className="nav-list">
                            <Navlink onClick={() => setClicked(false)} href={"/"} label={"Home"} />
                            <Navlink onClick={() => setClicked(false)} href={"/about"} label={"About"} />
                            <Navlink onClick={() => setClicked(false)} href={"/protfolio"} label={"Portfolio"} />
                            <Navlink onClick={() => setClicked(false)} href={"/contact"} label={"Contact"} />
                        </ul>
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default Header