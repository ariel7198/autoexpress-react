import React from 'react'
import style from '../style/Streamercard.module.css'

import { IconContext } from 'react-icons';

const Streamercard = ({ name, thumb, description, icon, platform, link }) => {
    return (
        <div className={style.streamercard}>
            <a href={link}> <img src={thumb} class={style.streamerThumb} alt='nandinho' /> </a>
            <div className={style.cardheader}>
                <h1> {name} </h1>
                <p>
                    {description}
                </p>
                <a href={link}>
                    <IconContext.Provider value={{ className: 'social-icons', size: '1.3em', style: { marginLeft: '5px' } }}>
                        {icon} SEGUIR
                    </IconContext.Provider>
                </a>
            </div>

        </div>
    )
}

export default Streamercard