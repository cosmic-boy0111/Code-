import React,{createContext,useState,useEffect} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Body from './components/Body';
import load from './videos/rocket.mp4'
import './App.css'
import Login from './components/Start/Login'
import Register from './components/Start/Register'
import Forgot from './components/Start/Forgot'


export const AppContext = createContext();

const App = () => {

  const [rootUser, setRootUser] = useState({});


  const [toggleState, setToggleState] = useState({
    right: false,
  });

  const [themeToggler, setThemeToggler] = useState(false);


  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)      
    }, 2000);
  }, []);
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setToggleState({ ...toggleState, [anchor]: open });
  };


  const [state2, setState2] = React.useState({
    left: false,
  });

  const toggleDrawer2 = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState2({ ...state2, [anchor]: open });
  };


  


  return (
    <>
      <div style={{
        display:loader ? 'flex' : 'none'
      }}
      className='load_page'
      >
      <video playsInline={true} preload='auto' autoPlay={true} loop={loader} muted={true} className='video' >
                <source src={load} type="video/mp4" style={{
                    borderRadius:'5px'
                }}/>
            </video>
      </div>
      <div  style={{
        display: !loader ? 'block' : 'none'
      }}>
      <BrowserRouter>
        <AppContext.Provider value={{
          toggleState,
          toggleDrawer,
          rootUser, 
          setRootUser,
          toggleDrawer2,
          state2,
          themeToggler, 
          setThemeToggler
        }}>

        <Routes>
          <Route exact path='*' element={<Body />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot' element={<Forgot />} />
        </Routes>
        </AppContext.Provider>
        <ToastContainer />
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
