import React,{useEffect} from 'react';
import '../../../style/Body/Programming.css'
import code from '../../../images/assets/code.jpg'
import Card from './Card'

import c_lang from '../../../images/assets/Programming_language/letter-c.png'
import cpp_lang from '../../../images/assets/Programming_language/c-.png'
import java_lang from '../../../images/assets/Programming_language/java.png'
import js_lang from '../../../images/assets/Programming_language/js.png'
import python_lang from '../../../images/assets/Programming_language/python.png'
import c_sharp_lang from '../../../images/assets/Programming_language/c-sharp.png'

import logo from '../../../images/icon/code.png'


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




const Programming = () => {


  useEffect(() => {
    var myDiv = document.getElementsByClassName('Actual_body')[0];
    myDiv.scrollTop = 0;
  }, []);
  


  const languages = [
    {
      title : 'C',
      icon : c_lang,
      link : '/programming'
    },
    {
      title : 'C++',
      icon : cpp_lang,
      link : '/programming/cpp'
    },
    {
      title : 'Python',
      icon : python_lang,
      link : '/programming'
    },
    {
      title : 'Java',
      icon : java_lang,
      link : '/programming'
    },
    {
      title : 'Javascript',
      icon : js_lang,
      link : '/programming'
    },
    
    {
      title : 'C Sharp',
      icon : c_sharp_lang,
      link : '/programming'
    },
  ]

  return (
    <>
      <div className='code_container'>
        <div className='code_img'>
          <img src={code} alt="" className='header_img'/>
        </div>
        <header className='tech_header'>
          <img src={logo} alt="" srcset="" className='logo'/> <h2>PROGRAMMING</h2>
        </header>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 4, md: 8 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(languages.length)).map((_, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
                <Item className='card_container'>
                  <Card data={languages[index]} />
                </Item>
            </Grid>
            ))}
        </Grid>
        </Box>

      </div>
    </>
  )
};

export default Programming;
