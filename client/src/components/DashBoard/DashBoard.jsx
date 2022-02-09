import React,{useContext,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { AppContext } from '../../App';
import { Theme } from '../Theme';
import { Box , Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { style } from '@mui/system';
import Bar from './Bar'
import Polar2 from './Polar';
import CardRoutes from './CardRoutes';
import {PolarArea} from 'react-chartjs-2'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const DashBoard = () => {
    const { themeToggler , rootUser } = useContext(AppContext)

  useEffect(() => {
    window.scroll(0,0)
  }, []);
  

  return <>
      <div className='info_holder'>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4} columns={{ xs: 4, sm: 4, md: 12 }} gridRow={{ xs: 0, sm: 0, md: 0}}>
            <Grid item xs={6} >
              <Item className='card_container'
              style={{
                    boxShadow:' none',
                    backgroundColor:'transparent'
                  }}
              >
                {/* <Bar /> */}
                <CardRoutes />
                    
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item className='card_container' style={{
                      backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
                      boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow,
                      border: themeToggler ? Theme.Dark.Border : Theme.Light.Border
                }}>
                    <Polar2 />
              
              </Item>
              <Item className='card_container' style={{
                      backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
                      boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow,
                      border: themeToggler ? Theme.Dark.Border : Theme.Light.Border,
                      marginTop:'2rem'
                }}>
                    {/* <Polar2 /> */}
                    <Bar />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
  </>;
};

export default DashBoard;
