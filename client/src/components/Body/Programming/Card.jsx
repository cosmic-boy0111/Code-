import React from 'react';
import { NavLink } from 'react-router-dom';
const Card = ({data}) => {
  return <>
    <div className='card_body'>
      <NavLink to={data.link} className='pro_link'>
        <img src={data.icon} alt="" srcset="" />
        <div>{data.title}</div>
      </NavLink>
    </div>
  </>;
};

export default Card;
