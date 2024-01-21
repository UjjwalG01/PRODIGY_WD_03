import React from 'react'

// Images imported
import logo from "../assets/logo-base.png";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-columns">
                    <div>
                        <a href="#"><img className="logo-icon-base" src={logo} alt="Logo" /></a>
                        <p className='text-center mt-2'>+977-9863612557</p>
                        <p className='text-center mt-'><a className='no-underline blue' target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTHWDLNKbfWnjbVJFvFbzVpRCkGTcvdkdlHpJZbHMXdVxlGDcbdHmwtPCbRkjzPdwNBHgB">ug.online.st@gmail.com</a></p>
                        {/* <p className='fs-x-small'>A Passionate Full-Stack Developer.</p> */}
                    </div>
                    <div>
                        <p className='text-center'>If you're interested in my latest posts, you can subscribe to my blog. I promise not to spam you and will only send you updates when I have something new to share</p>
                        <div className="input-field flex">
                            <input type="text" placeholder='YOUR EMAIL' />
                            <button className="button">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="copyright-footer fs-x-small">
                    <div className="copyright">© {new Date().getFullYear()} Developed By: <a href="https://www.instagram.com/__ujjwal_giri?igsh=MW1ybDc0NmV4a3M4Mw==">Ujjwal Giri</a> </div>
                    <div className="privacy fw-bold"><a className='no-underline white' href="#">PRIVACY POLICY</a></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer