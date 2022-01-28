import React, { useState , useContext } from 'react';
import '../../style/Initial/Login.css'
import login from '../../images/assets/undraw_maker_launch_re_rq81.svg'
import Button from '@mui/material/Button';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = ({setPage}) => {

  const navigate = useNavigate();

  const [userData,setUserData] = useState({
    email : '',
    password : ''
  })

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
    // alert('res')
      const {email,password} = userData;
      const res = await fetch('/signin',{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body: JSON.stringify({
              email,password
          })

      })

      if(res.status === 400){
        toast.error('Invalid credentials')
      }else{
        toast.success('User Login Successfully')
        navigate('/')
      }

    } catch (error) {
      console.log(error);
    }

  }


  const inputHandler = (e) =>{
    var name = e.target.name;
    var value = e.target.value;

    setUserData({...userData,[name]:value})

  }

  return <>
    <div className='login_page'>
      <h2 className='heading'> LOGIN </h2>
      <div className='login_body'>
        <div className='login_image_div'>
          <img src={login} alt="" />
        </div>
        <div className='login_form'>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" name='email' value={userData.email} onChange={inputHandler} required/>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" name='password' value={userData.password} onChange={inputHandler} required/>
            </div>
            <Button type='submit' variant="contained" style={{width:'100%'}}>LOGIN</Button>
            <Button color='primary' style={{width:'100%',marginTop:'1rem'}} onClick={()=>setPage('forgot')}>Forgot Password ?</Button>
          </form>
          <footer>
          <Button variant="outlined" style={{width:'100%'}} onClick={()=>setPage('register')}>Create Account</Button>
          </footer>
        </div>
      </div>
    </div>
  </>;
};

export default Login;
