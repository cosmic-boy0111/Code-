import React,{useState} from 'react';
import '../../style/Initial/Login.css'
import register from '../../images/assets/undraw_launching_re_tomg.svg'
import Button from '@mui/material/Button';
import { toast } from 'react-toastify'

const Register = ({setPage}) => {


  const [userData,setUserData] = useState({
    name : '',
    email : '',
    password : '',
    cPassword : '',
    key : ''
  })
  
 
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
          setPage('login')
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
    <div className='login_page'>
      <h2 className='heading'> CREATE ACCOUNT </h2>
      <div className='login_body'>
        <div className='login_image_div'>
          <img src={register} alt="" />
        </div>
        <div className='login_form'>
          <form onSubmit={ handleSubmit } id='register_form'>
            <div class="mb-2">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control bg-grey" id="name" name='name' value={userData.name} onChange={handleInput} required/>
            </div>
            <div class="mb-2">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control bg-grey" id="email" name='email' value={userData.email} onChange={handleInput} required/>
            </div>
            
            <div class="mb-2">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control bg-grey" id="password" name='password' value={userData.password} onChange={handleInput} required/>
            </div>
            <div class="mb-2">
              <label for="cPassword" class="form-label">Confirm Password</label>
              <input type="password" class="form-control bg-grey" id="cPassword" name='cPassword' value={userData.cPassword} onChange={handleInput} required/>
            </div>
            <div class="mb-3">
              <label for="key" class="form-label">Security Key</label>
              <input type="text" class="form-control bg-grey" id="key" placeholder='Which thing makes you happy ?' name='key' value={userData.key} onChange={handleInput} required/>
              <span id="key" class="form-text">This will be set as your Security Key</span>
            </div>
          <Button type='submit' variant="contained" style={{width:'100%'}} >create account</Button>
            
          </form>
          <footer>
          <Button variant="outlined" style={{width:'100%'}} onClick={()=>setPage('login')}>Login</Button>
          </footer>
        </div>
      </div>
    </div>
  </>;
};

export default Register;
