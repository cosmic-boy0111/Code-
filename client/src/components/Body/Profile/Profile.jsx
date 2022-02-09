import React,{useEffect,useContext} from 'react';
import '../../../style/Body/Profile.css'
import UserHeader from './UserHeader';
import ProfileHolder from './ProfileHolder';
import { AppContext } from '../../../App';

const Profile = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {setRootUser,rootUser} = useContext(AppContext)

  const getData = async() =>{
    try {
      const res2 = await fetch('/about',{
          method:'GET',
          headers:{
              "Content-Type":"application/json"
          }
      })

          const Data = await res2.json();
          setRootUser(Data)
      } catch (error) {
          console.log('data not found');
      }
  }

  useEffect(() => {
    getData();
  },[]);

  return (
    <>
        <UserHeader />
        <ProfileHolder />
        
    </>
  )
};

export default Profile;
