import React,{useContext} from 'react';
// import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';


import { AppContext } from '../../App';
import SideLink from './SideLink';
import user from '../../images/icon/user.png'
import blog from '../../images/icon/blogging.png'
import users from '../../images/icon/about-us.png'
import code from '../../images/icon/code.png'
import webDev from '../../images/icon/layers.png'
import more from '../../images/icon/more.png'
import machine from '../../images/icon/big-data.png'
import appDev from '../../images/icon/developer.png'
import home from '../../images/icon/homepage.png'

import { NavLink } from 'react-router-dom';
export default function TemporaryDrawer() {
  
const {toggleDrawer2,state2} = useContext(AppContext);

  return (
    <div className='side_drawer'>
      {['left'].map((anchor) => (
        <React.Fragment key={'left'}>
          
          <SwipeableDrawer
            anchor={anchor}
            open={state2[anchor]}
            onClose={toggleDrawer2(anchor, false)}
            onOpen={toggleDrawer2(anchor, true)}
            swipeAreaWidth={0}
          >     
            
            <Box
                // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={toggleDrawer2(anchor, false)}
                onKeyDown={toggleDrawer2(anchor, false)}
            >
            <div className='side_nav2'>
                <NavLink className='link2' to={'/'} > <img src={home} alt="" className='link_icon'/> Home  </NavLink>
                <NavLink className='link2' to={'/user'}> <img src={user} alt="" className='link_icon'/> Profile  </NavLink>
                <NavLink className='link2' to={'/blog'}> <img src={blog} alt="" className='link_icon'/> Blogs  </NavLink>
                <NavLink className='link2' to={'/'}> <img src={users} alt="" className='link_icon'/> Users  </NavLink>
                <NavLink className='link2' to={'/programming'}> <img src={code} alt="" className='link_icon'/> Programming  </NavLink>
                <NavLink className='link2' to={'/'}> <img src={webDev} alt="" className='link_icon'/> Web Development  </NavLink>
                <NavLink className='link2' to={'/'}> <img src={appDev} alt="" className='link_icon'/> App Development  </NavLink>
                <NavLink className='link2' to={'/'}> <img src={machine} alt="" className='link_icon'/> Machine Learning  </NavLink>
                <NavLink className='link2' to={'/'}> <img src={more} alt="" className='link_icon'/>   </NavLink>
            </div>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
