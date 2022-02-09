import React,{useContext} from 'react'
import '../../style/Navbar/HeadNav.css'
import search from '../../images/icon/search.png'
import Button from '@mui/material/Button';
import { AppContext } from '../../App';
import menu from '../../images/icon/menu.png'
import { IconButton } from '@mui/material';
import AppLogo from '../../images/AppLogo.png'
import MenuIcon from '@mui/icons-material/Menu';
import ThemeButton from '../ThemeChnageButton'

const HeadNav = () => {

    const {toggleDrawer2} = useContext(AppContext)

    return (
        <nav className='head_nav'>
            
            <div className='app_logo'>
                <img src={AppLogo} alt="" srcset="" />
            </div>
            {/* <div className='search'>
                <img src={search} alt="" srcset="" className='search_icon'/>
                <input type="text" name="" id="" className='search_bar' placeholder='Search here...'/>
            </div> */}
            <div className='theme_button_container'>
            <ThemeButton />
            <span onClick={toggleDrawer2('left', true)} className='Open_side_drawer'><MenuIcon /></span>
            </div>
        </nav>
    )
}

export default HeadNav
