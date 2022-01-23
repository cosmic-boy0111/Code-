import React,{useState,useContext} from 'react'
import security from '../../images/assets/undraw_forgot_password_re_hxwm.svg'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import bcrypt from 'bcryptjs'
import { toast } from 'react-toastify'


// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}
const Forgot = ({setPage}) => {


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
            setPage('login')
            toast.success('Password Update')
        } catch (error) {
            toast.error('Update Failed')
            console.log(error);
        }
    }

    return (
        <>
        
        <div className='login_page'>
            <h2 className='heading'> FORGOT PASSWORD </h2>
            <div className='login_body'>
                
                <div className='login_image_div'>
                    <img src={security} alt="" />
                </div>
                <div className='login_form'>
                <form onSubmit={ isVerify ? submitData : verify}>
                   
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email"  name='email' value = {email} onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                    
                    <div class="mb-3">
                        <label for="key" class="form-label">Security Key</label>
                        <input type="text" class="form-control" id="key"  name='key' value = {key} onChange={(e)=>setKey(e.target.value)} required/>
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
                            <input type="password" class="form-control bg-grey" id="password"  name='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                        </div>
                        
                        <div class="mb-3">
                            <label for="confirmPassword" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control bg-grey" id="confirmPassword"  name='confirmPassword' value={cPassword} onChange={(e)=> setCPassword(e.target.value)} />
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
                <footer>
                    <Button variant="outlined" style={{width:'100%'}} onClick={()=>setPage('login')}>Login</Button>
                </footer>
                </div>
            </div>
        </div>
        </>
    )
}

export default Forgot

