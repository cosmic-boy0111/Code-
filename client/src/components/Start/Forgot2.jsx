import React from 'react';
import '../../style/Initial/Login.css'
import forgot from '../../images/assets/undraw_forgot_password_re_hxwm.svg'
import Button from '@mui/material/Button';

const Forgot = ({setPage}) => {


    const handleSubmit = (e) =>{
        e.preventDefault();
    }

  return <>
  <div className='login_page'>
      <h2 className='heading'> FORGOT PASSWORD </h2>
      <div className='login_body'>
        <div className='login_image_div'>
          <img src={forgot} alt="" />
        </div>
        <div className='login_form'>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control bg-grey" id="email" />
            </div>
            <Button variant="contained" style={{width:'100%'}} >submit</Button>
          </form>
          <footer>
          <Button variant="outlined" style={{width:'100%'}} onClick={()=>setPage('login')}>login</Button>
          </footer>
        </div>
      </div>
    </div>
  </>;
};

export default Forgot;
