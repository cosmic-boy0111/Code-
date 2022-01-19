import React from 'react'
import '../../style/Navbar/SideNav.css'
import SideLink from './SideLink';
import user from '../../images/icon/user.png'
import blog from '../../images/icon/blogging.png'
import users from '../../images/icon/about-us.png'
import code from '../../images/icon/code.png'
import webDev from '../../images/icon/layers.png'
import more from '../../images/icon/more.png'
import machine from '../../images/icon/big-data.png'
import appDev from '../../images/icon/developer.png'

const SideNav = () => {
    return (
        <div className='side_nav'>
            <SideLink icon={user} link={'#'} />
            <SideLink icon={blog} link={'#'} />
            <SideLink icon={users} link={'#'} />
            <SideLink icon={code} link={'#'} />
            <SideLink icon={webDev} link={'#'} />
            <SideLink icon={appDev} link={'#'} />
            <SideLink icon={machine} link={'#'} />
            <SideLink icon={more} link={'#'} />
        </div>
    )
}

export default SideNav
