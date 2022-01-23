import React,{useEffect,useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom'
import user_icon from '../../images/icon/user.png'
import blog from '../../images/icon/blogging.png'
import users from '../../images/icon/about-us.png'
import code from '../../images/icon/code.png'
import webDev from '../../images/icon/layers.png'
import more from '../../images/icon/more.png'
import machine from '../../images/icon/big-data.png'
import appDev from '../../images/icon/developer.png'
import Card from './Card';
import '../../style/DashBoard/Card.css'
import { AppContext } from '../../App';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DashBoard = () => {

    
  useEffect(() => {
    var myDiv = document.getElementsByClassName('Actual_body')[0];
    myDiv.scrollTop = 0;
  }, []);
    const { rootUser, setRootUser } = useContext(AppContext)

    const card_data = [
        {
            title : 'Profile',
            icon : user_icon,
            link : '/profile'
        },
        {
            title : 'Blog',
            icon : blog,
            link : '/blog'
        },
        {
            title : 'Users',
            icon : users,
            link : '/'
        },
        {
            title : 'Programming',
            icon : code,
            link : '/programming'
        },
        {
            title : 'Web Development',
            icon : webDev,
            link : '/'
        },
        {
            title : 'App Development',
            icon : appDev,
            link : '/'
        },
        {
            title : 'Machine Learning',
            icon : machine,
            link : '/'
        },
    ]

  return (
      <>
        <h1>Welcome {rootUser.name}</h1>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 4, md: 8 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(card_data.length)).map((_, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
                <Item className='card_container'>
                    <Card data={card_data[index]}/>
                </Item>
            </Grid>
            ))}
        </Grid>
        </Box>
      </>
  );
};

export default DashBoard;
