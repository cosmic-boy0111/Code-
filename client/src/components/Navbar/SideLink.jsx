import React from 'react'
import { NavLink } from 'react-router-dom'

const SideLink = ({icon,link}) => {
    return (
        <div>
            <NavLink to={'/'}> <img src={icon} alt="" className='link_icon'/> </NavLink>
        </div>
    )
}

export default SideLink
