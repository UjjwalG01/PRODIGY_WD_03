import React from 'react'
import { Link } from 'react-scroll'

const Navlink = ({ href, label, onClick, children, className, target }) => {
    return (
        <li><Link to={href} target={target} smooth={true} offset={-140} className={`${className} link`} onClick={onClick} >{label}{children}</Link></li>
    )
}

export default Navlink