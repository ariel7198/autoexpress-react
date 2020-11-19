import React from 'react'
import style from '../style/Streamercard.module.css'

const Streamercard = ({ name, description, icon, platform, link }) => {
    return (
        <div className={style.streamercard}>
            <h1> {name} </h1>
            <p>{description} </p>
            <button className={platform} href={link}>
                {platform} {icon}
            </button>
        </div>
    )
}

export default Streamercard