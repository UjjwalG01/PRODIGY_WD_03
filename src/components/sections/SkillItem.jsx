import { Link } from "react-router-dom";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";

export function SkillItem({ to }) {
    return (
        <>
            <li><Link to={to}><FaHtml5 className="icon html" /></Link></li>
            <li><Link to={to}><FaCss3Alt className="icon css" /></Link></li>
            <li><Link to={to}><BiLogoJavascript className="icon js" /></Link></li>
            <li><Link to={to}><FaReact className="icon react" /></Link></li>
            <li><Link to={to}><SiTailwindcss className="icon tailwind" /></Link></li>
            <li><Link to={to}><FaBootstrap className="icon bootstrap" /></Link></li>
            <li><Link to={to}><FaNodeJs className="icon node" /></Link></li>
            <li><Link to={to}><FaGitAlt className="icon git" /></Link></li>
            <li><Link to={to}><SiMongodb className="icon mongo" /></Link></li>
            <li><Link to={to}><SiMysql className="icon mysql" /></Link></li>
        </>
    )
}