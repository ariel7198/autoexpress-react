import React from 'react'
import style from '../style/Contactcard.module.css'

import { IconContext } from 'react-icons';

const ContactCard = ({ icon, link }) => {
    return (
        <div className={style.contactcard}>
            <a href={link}>
                <IconContext.Provider value={{ className: 'social-icons', size: '4em' }}>
                    {icon}
                </IconContext.Provider>
            </a>

        </div>
    )
}

export default ContactCard