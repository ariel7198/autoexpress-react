import React from 'react'
import style from '../style/Benefitcard.module.css'
import { FaUserFriends } from 'react-icons/fa';
import { IconContext } from 'react-icons';


const Benefitcard = ({ title, description, icon}) => {
    return (
        <div className={style.benefitcard}>
        <IconContext.Provider value={{ size: '2.5em' }}>
            {icon}
        </IconContext.Provider>
        <h2> {title} </h2>
        <p> {description} </p>
        </div>
    )
}

export default Benefitcard