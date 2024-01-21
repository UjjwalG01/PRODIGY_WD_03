import React from 'react'
import { Link } from 'react-router-dom'

const Navlink = ({ href, label, onClick, children, className, target }) => {
    return (
        <li><a target={target} className={className} onClick={onClick} href={href}>{label}{children}</a></li>
    )
}

export default Navlink