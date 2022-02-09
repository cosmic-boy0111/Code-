import React from 'react'
import { NavLink } from 'react-router-dom'
import { Tooltip } from '@mui/material'

const SideLink = ({icon,link}) => {
    return (
        <Tooltip title={link === '/' ? 'Home' : link }  placement="right"> 
        <div>
            <NavLink to={link}> <img src={icon} alt="" className='link_icon'/>  </NavLink>  
        </div>
        </Tooltip>
    )
}

export default SideLink
