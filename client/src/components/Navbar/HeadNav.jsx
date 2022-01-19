import React from 'react'
import '../../style/Navbar/HeadNav.css'
import search from '../../images/icon/search.png'

const HeadNav = () => {
    return (
        <nav className='head_nav'>
            <div className='app_logo'>

            </div>
            <div className='search'>
                <img src={search} alt="" srcset="" className='search_icon'/>
                <input type="text" name="" id="" className='search_bar' placeholder='Search here...'/>
            </div>
        </nav>
    )
}

export default HeadNav
