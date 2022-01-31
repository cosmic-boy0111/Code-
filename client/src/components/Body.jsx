import React,{useEffect,useContext} from 'react';
import HeadNav from './Navbar/HeadNav';
import SideNav from './Navbar/SideNav';
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom'
import Blog from './Body/Blog_body/Blog';
import Profile from './Body/Profile/Profile';
import Programming from './Body/Programming/Programming';
import DashBoard from './DashBoard/DashBoard';
import { AppContext } from '../App';
import Cpp from './Body/Programming/Languages/Cpp/Cpp';
import TemporaryDrawer from './Navbar/Drawer';
const Body = () => {

  const {rootUser, setRootUser} = useContext(AppContext);

  
  // useEffect(() => {
  //   var myDiv = document.getElementsByClassName('Actual_body')[0];
  //   myDiv.scrollTop = 0;
  // }, []);

    let navigate = useNavigate();
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
          navigate('/login')
      }
  }

  useEffect(() => {
    getData();
  },[]);
  return(
    <>
      {/* <div className='App'>
          <div className='Body'>
              <div >
                  <SideNav />
                  <TemporaryDrawer />
              </div>
              <div className='Body_container'>
                  <HeadNav />
                  <div className='Actual_body'>
                      
                      <Routes>
                        <Route exact path='/' element={<DashBoard />} />
                        <Route exact path='/blog' element={<Blog />} />
                        <Route exact path='/profile' element={<Profile />} />
                        <Route exact path='/programming' element={<Programming />} />
                        <Route exact path='/programming/cpp' element={<Cpp />} />
                      </Routes>
                  </div>
              </div>

          </div>
      </div> */}

      <div className='Body'>
        <SideNav />
        <TemporaryDrawer />
        <div className='Body_container'>
          <HeadNav />
          <div className='Actual_body'>
                      
                      <Routes>
                        <Route exact path='/' element={<DashBoard />} />
                        <Route exact path='/blog' element={<Blog />} />
                        <Route exact path='/profile' element={<Profile />} />
                        <Route exact path='/programming' element={<Programming />} />
                        <Route exact path='/programming/cpp' element={<Cpp />} />
                      </Routes>
                  </div>
        </div>
      </div>
    </>
  );
}
export default Body
