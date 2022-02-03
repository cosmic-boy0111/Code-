import React,{useContext} from 'react';
import Grid from '@mui/material/Grid';
import { AppContext } from '../../../App';
import { Theme } from '../../Theme';
import { Box , Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import About from './About';
import Bar from './Bar'
import { style } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ProfileHolder = () => {
    const { themeToggler , rootUser } = useContext(AppContext)
  return <>
      <div className='info_holder'>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4} columns={{ xs: 4, sm: 4, md: 12 }}>
            <Grid item xs={5} >
              <Item className='card_container'
              style={{
                      backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
                      boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow,
                      border: themeToggler ? Theme.Dark.Border : Theme.Light.Border
                  }}
              >
                <About />
              </Item>
            </Grid>
            <Grid item xs={7} >
              <Item className='card_container' style={{
                  backgroundColor : 'transparent',
                  boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow,
              }}>
                <Bar 
                  bgColor = {'rgba(36, 153, 239, 0.85)'} 
                  labels={['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']}
                  data = {[10,5,30,10,20,4,9,11,15,4,1,8]}
                  label = {'BLOGS'}
                />
              </Item>
              <Item className='card_container' style={{
                  backgroundColor : 'transparent',
                  boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow,
              }}>
                <Bar 
                  bgColor = {'#ec407a'} 
                  labels={['C','C++','Java','Python','JS','C Sharp']}
                  data = {[8,10,5,7,9,7,4]}
                  label = {'PROBLEMS'}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
  </>;
};

export default ProfileHolder;
