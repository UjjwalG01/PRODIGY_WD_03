import { Link } from "react-router-dom";
import { FaCodeBranch, FaLocationArrow } from 'react-icons/fa'
import { AnimatePresence, motion } from "framer-motion";

export function WorkCard({ img, title, description, techs, github, live }) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: "-100%", transition: { duration: 0.2 } }}
                className="work-card">
                <img src={img} alt="" />
                <h2 className='fs-small mt-2 fw-bold'>{title}</h2>
                <p className='fs-x-small fw-regular'>{description}</p>
                <ul role='list' className='tech-stack'>
                    <li>{techs[0]}</li>
                    <li>{techs[1]}</li>
                    <li>{techs[2]}</li>
                    <li>{techs?.[3]}</li>
                    <li>{techs?.[4]}</li>
                </ul>
                <div className="btn-link">
                    <Link className='no-underline' target='_blank' to={github}><button className='button flex'>Code <FaCodeBranch /></button></Link>
                    <Link className='no-underline' target='_blank' to={github}><button className='button flex'>Go Live <FaLocationArrow /></button></Link>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}