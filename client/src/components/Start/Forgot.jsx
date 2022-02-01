import React,{useState,useContext} from 'react'
import security from '../../images/assets/undraw_forgot_password_re_hxwm.svg'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import bcrypt from 'bcryptjs'
import { toast } from 'react-toastify'
import {
    useNavigate,
    NavLink
} from 'react-router-dom'
import ThemButton from '../ThemeChnageButton'
import { AppContext } from '../../App';
import { Theme } from '../Theme';
import logo from '../../images/AppLogo.png'


const Forgot = () => {

    const navigate = useNavigate();

    const {themeToggler} = useContext(AppContext)

    const [key, setKey] = useState('');
    const [email, setEmail] = useState('');
    const [circle, setCircle] = useState(false);
    const [isVerify, setIsVerify] = useState(false)
    const [err, setErr] = useState(false)
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [done, setDone] = useState(false)
    const [passErr, setPassErr] = useState('')


    const verify = async (e) =>{
        e.preventDefault();
        console.log(email);
        console.log(key);
        setCircle(true)
        try {
            setCircle(true)
            const res = await fetch('/getUser',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email : email,
                })
            })

            const data = await res.json();
            console.log(data);
            
            if(res.status === 201){
                setCircle(false)
                const isMatch = await bcrypt.compare(key, data.key);
                console.log(isMatch);
                if(isMatch){
                    console.log('match');
                    setIsVerify(true);
                    setErr(false)
                }else{
                    setErr(true)
                }
            }else{
                setCircle(false)
            }

        } catch (error) {
            console.log(error);
            setCircle(false);
            setErr(true);
        }

    }

    const submitData = async (e) => {
        e.preventDefault();

        if(password === '' || cPassword === ''){
            setPassErr('Enter Password');
            return;
        }else if(password !== cPassword){
            setCPassword('')
            setPassword('')
            setPassErr('Passwords not match');
            return;
        }else if(password.length < 5){
            setCPassword('')
            setPassword('')
            toast.info('Password size must be greater than 4')
            return;
        }
        setCircle(true)
        try {
            const res = await fetch('/getUser',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email : email,
                })
            })

            const data = await res.json();

            const res2 = await fetch('/updateUser3',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    id : data._id,
                    password : password,
                    cPassword : cPassword
                })
            })

            setCircle(false);
            setDone(true);
            setPassErr('')
            console.log('update');
            toast.success('Password Update')
            navigate('/login')
        } catch (error) {
            toast.error('Update Failed')
            console.log(error);
        }
    }

    return (
        <>
        
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
            <h2>Reset your password</h2>
        </div>

                <div className='login_form'>
                <form onSubmit={ isVerify ? submitData : verify}>
                   
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control bg-tp" id="email"  name='email' value = {email} onChange={(e)=>setEmail(e.target.value)} required style={{
                color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor
              }}/>
                    </div>
                    
                    <div class="mb-3">
                        <label for="key" class="form-label">Security Key</label>
                        <input type="text" class="form-control bg-tp" id="key"  name='key' value = {key} onChange={(e)=>setKey(e.target.value)} required style={{
                color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor
              }}/>
                    </div>
                    <div style={{
                        display:err?'block':'none'
                        }}>
                        <p style={{
                            display:err?'inline':'none',
                            color:'rgb(244, 67, 54)',
                            fontSize:'13px',
                            fontWeight:'bold'
                        }}>secret key/email not match</p>
                    </div>
                    <div style={{
                        display:isVerify?'block':'none'
                    }}>
                       
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control bg-tp " id="password"  name='password' value={password} onChange={(e)=> setPassword(e.target.value)} style={{
                color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor
              }}/>
                        </div>
                        
                        <div class="mb-3">
                            <label for="confirmPassword" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control bg-tp " id="confirmPassword"  name='confirmPassword' value={cPassword} onChange={(e)=> setCPassword(e.target.value)} style={{
                color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor
              }}/>
                        </div>
                    </div>
                    <div style={{
                        display: passErr === '' ?'none':'block'
                        }}>
                        <p style={{
                            display: passErr==='' ?'none':'inline',
                            color:'rgb(244, 67, 54)',
                            fontSize:'13px',
                            fontWeight:'bold'
                        }}>{passErr}</p>
                    </div>
                     <Button type='submit' variant="contained" className='change_pass' style={{ width:'100%' }}>Submit</Button>
                    
            
                        
                    
                    
                </form>
                <footer className='Log_footer'>
                    <NavLink to='/login' className='initial_link' > <Button variant="outlined" style={{width:'100%'}} >Login</Button> </NavLink>
                </footer>
                </div>
            </div>
        </div>
        </>
    )
}

export default Forgot

