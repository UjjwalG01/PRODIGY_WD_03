import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
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
                        <ul role="list" className="nav-list">
                            <Navlink onClick={() => setClicked(false)} href={"#home"} label={"Home"} />
                            <Navlink onClick={() => setClicked(false)} href={"#skills"} label={"Skills"} />
                            <Navlink onClick={() => setClicked(false)} href={"#portfolio"} label={"Portfolio"} />
                            <Navlink onClick={() => setClicked(false)} href={"#contact"} label={"Contact"} />
                        </ul>
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default Header