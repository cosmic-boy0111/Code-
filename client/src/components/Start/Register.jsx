import React,{useState,useContext,useEffect} from 'react';
import '../../style/Initial/Login.css'
import register from '../../images/assets/undraw_launching_re_tomg.svg'
import Button from '@mui/material/Button';
import { toast } from 'react-toastify'
import {
  useNavigate,
  NavLink
} from 'react-router-dom'
import ThemButton from '../ThemeChnageButton'
import { AppContext } from '../../App';
import { Theme } from '../Theme';
import logo from '../../images/AppLogo.png'

const Register = () => {

  const navigate = useNavigate();

  const {themeToggler} = useContext(AppContext)

  const [userData,setUserData] = useState({
    name : '',
    email : '',
    password : '',
    cPassword : '',
    key : ''
  })

  const getData = async() =>{
    try {
      const res2 = await fetch('/about',{
          method:'GET',
          headers:{
              "Content-Type":"application/json"
          }
      })

          const Data = await res2.json();
          navigate('/')
      } catch (error) {
          console.log('data not found');
      }
  }

  useEffect(() => {
    getData();
  },[]);
  
 
  const handleSubmit =  async(e) =>{

      e.preventDefault();
      if(userData.password !== userData.cPassword){
        toast.error('Passwords not match')
        return
      }

      if(userData.password !== '' && userData.password.length < 5){
        toast.info('Password size must be greater than 4')
        return
      }

      try {
        
        const {name,email,password,cPassword,key} = userData;
      
        const res = await fetch('/register',{
          method: 'POST',
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            name,email,password,cPassword,key
          })
        })

        if(res.status === 200){
          toast.success('user register')
          navigate('/login')
        }
      } catch (error) {
        console.log(error);
      }

  }


  const handleInput = (e) =>{
    var name = e.target.name;
    var value = e.target.value;

    setUserData({...userData,[name] : value})
    console.log(userData);
  }

  return <>
    <div className='login_page' style={{
      backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor,
      color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
    }}>
      <div className='Theme_button'>
        <ThemButton />
      </div>
      <div className='login_body' style={{
        backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
        boxShadow : Theme.Dark.BoxShadow
      }}>
        <div className='Header_container'>
            <img src={logo} alt="" srcset="" />
            <h2>Create Account</h2>
        </div>
        <div className='login_form'>
          <form onSubmit={ handleSubmit } id='register_form'>
            <div class="mb-2">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control bg-tp" id="name" name='name' value={userData.name} onChange={handleInput} required style={{
                color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor
              }}/>
            </div>
            <div class="mb-2">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control bg-tp" id="email" name='email' value={userData.email} onChange={handleInput} required style={{
                color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor
              }}/>
            </div>
            
            <div class="mb-2">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control bg-tp" id="password" name='password' value={userData.password} onChange={handleInput} required style={{
                color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor
              }}/>
            </div>
            <div class="mb-2">
              <label for="cPassword" class="form-label">Confirm Password</label>
              <input type="password" class="form-control bg-tp" id="cPassword" name='cPassword' value={userData.cPassword} onChange={handleInput} required style={{
                color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor
              }}/>
            </div>
            <div class="mb-3">
              <label for="key" class="form-label">Security Key</label>
              <input type="text" class="form-control bg-tp" id="key" placeholder='Which thing makes you happy ?' name='key' value={userData.key} onChange={handleInput} required style={{
                color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor
              }}/>
              <span id="key" class="form-text">This will be set as your Security Key</span>
            </div>
          <Button type='submit' variant="contained" style={{width:'100%'}} >create account</Button>
            
          </form>
          <footer className='Log_footer'>
          <NavLink to='/login' className='initial_link' > <Button variant="outlined" style={{width:'100%'}} >Login</Button> </NavLink>
          </footer>
        </div>
      </div>
    </div>
  </>;
};

export default Register;
