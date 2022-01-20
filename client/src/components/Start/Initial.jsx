import React,{ useState , useEffect } from 'react';
import Forgot from './Forgot';
import Login from './Login'
import Register from './Register';
import { useNavigate } from 'react-router-dom'

const Initial = () => {

  const [page,setPage] = useState('login')
  const navigate = useNavigate();
  
  const getData = async() =>{
    try {
      const res2 = await fetch('/about',{
          method:'GET',
          headers:{
              "Content-Type":"application/json"
          }
      })

          const Data = await res2.json();
          navigate("/")
      } catch (error) {
          console.log('data not found');
      }
  }

useEffect(() => {
  getData();
}, []);


  return <>
      {
        page === 'login' ? <Login setPage={setPage}/> : (
          page === 'register' ? <Register setPage={setPage}/> : (
            page === 'forgot' ? <Forgot setPage={setPage}/> : ``
          )
        )
      }
      
  </>;
};

export default Initial;
