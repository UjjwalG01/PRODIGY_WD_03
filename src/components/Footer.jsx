import React from 'react'

// Images imported
import logo from "../assets/logo-base.png";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-columns">
                    <div>
                        <img className="logo-icon-base" src={logo} alt="Logo" />
                        <p className='text-center mt-2'>+977-9863612557</p>
                        <p className='text-center mt-'>ug.online.st@gmail.com</p>
                        {/* <p className='fs-x-small'>A Passionate Full-Stack Developer.</p> */}
                    </div>
                    <div>
                        <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nostrum sequi deleniti.</p>
                        <div className="input-field flex">
                            <input type="text" placeholder='YOUR EMAIL' />
                            <button className="button">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="copyright-footer fs-x-small">
                    <div className="copyright">© {new Date().getFullYear()} Developed By: <a href="#">Ujjwal Giri</a> </div>
                    <div className="privacy fw-bold"><a className='no-underline white' href="#">PRIVACY POLICY</a></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer