import React,{useContext,useEffect} from 'react';
import { AppContext } from '../../../App';
import { Theme } from '../../Theme';
import { CardMedia } from '@mui/material';
import TabBar from './TabBar'
import { Avatar } from '@mui/material';
const UserHeader = () => {

  const  {themeToggler,rootUser} = useContext(AppContext)

  return <>
    <div className='Header_main_body' style={{
      backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
      boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow,
      border: themeToggler ? Theme.Dark.Border : Theme.Light.Border
    }}>
      <CardMedia
        component="img"
        height="200"
        image="https://uko-react.vercel.app/static/background/user-cover-pic.png"
        alt="Paella dish"
      />
      <div className='Header_main_bottom'>
        <div className='logo_holder'>
          <div className='logo_img' style={{
            backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor
          }}>
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe" style={{
              height:'100%',
              width:'100%'
            }}>
              {/* {rootUser === undefined ? '' : rootUser.name[0]} */}
              {rootUser.name === undefined ? '' : rootUser.name[0]}
            </Avatar>
          </div>
          <div className='name_role_info'>
            {rootUser.name}
          </div>
        </div>
        <div className='tabs'>
          <TabBar />
        </div>
      </div>
    </div>
  </>;
};

export default UserHeader;
