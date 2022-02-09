import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../App';
import { Theme } from '../Theme';
import { Tooltip } from '@mui/material';
const Card = ({data}) => {

  const {themeToggler} = useContext(AppContext)

  return <>
    <div className='card_body'>
      <NavLink to={data.link} className='pro_link'>
        <img src={data.icon} alt="" srcset="" />
        <div style={{
          color : themeToggler ? Theme.Dark.Color : Theme.Light.Color

        }} >{data.title}</div>
      </NavLink>
    </div>
  </>;
};

export default Card;
