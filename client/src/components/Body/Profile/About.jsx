import React,{useContext} from 'react';
import { AppContext } from '../../../App';
import { Theme } from '../../Theme';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EmailIcon from '@mui/icons-material/Email';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

const About = () => {

    const { themeToggler , rootUser } = useContext(AppContext)

  return <>
      <div className='follow_div'>
                    <div className='follow'>
                        <div className='follow_icon' style={{
                            backgroundColor: 'rgb(255, 151, 119)'
                        }}>
                            <GroupAddIcon />
                        </div>
                        <div className='follow_count'>
                            <h6 style={{
                                color: 'rgb(148, 164, 196)'
                            }} >Following</h6>
                            <h6 style={{
                                fontWeight:'bold',
                                color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
                            }}>10000</h6>
                        </div>
                    </div>
                    <div className='follow'>
                        <div className='follow_icon' style={{
                            backgroundColor: 'rgb(36, 153, 239)'
                        }}>
                            <GroupAddIcon />
                        </div>
                        <div className='follow_count'>
                            <h6 style={{
                                color: 'rgb(148, 164, 196)'
                            }} >Followers</h6>
                            <h6 style={{
                                fontWeight:'bold',
                                color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
                            }}>10000</h6>
                        </div>
                    </div>
                </div>

                <div className='About' style={{
                    color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
                }}>
                    <h6>About</h6>
                    <p style={{ opacity:'.7' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae corrupti laborum quasi magni omnis, unde porro laudantium totam neque ab.</p>
                    <div className='info_holder2' style={{
                        backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor
                    }}>
                        <EmailIcon />{' '} <span style={{ opacity:'.7' }}>{rootUser.email} </span> 
                    </div>
                    <div className='info_holder2' style={{
                        backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor
                    }}>
                        <ModeEditOutlineRoundedIcon />{' '} <span style={{ opacity:'.7' }}>Edit </span>  <span style={{ float:'right' }}> <ArrowRightRoundedIcon /> </span>
                    </div>
                    <div className='info_holder2' style={{
                        backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor
                    }}>
                        <LogoutRoundedIcon />{' '} <span style={{ opacity:'.7' }}>Logout </span> <span style={{ float:'right' }}> <ArrowRightRoundedIcon /> </span>
                    </div>
                    <div className='info_holder2' style={{
                        backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor
                    }}>
                        <DeleteRoundedIcon />{' '} <span style={{ opacity:'.7' }}>Delete </span> <span style={{ float:'right' }}> <ArrowRightRoundedIcon /> </span>
                    </div>
                </div>
  </>;
};

export default About;
