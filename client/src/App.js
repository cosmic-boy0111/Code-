import React,{createContext,useState,useEffect} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Blog from './components/Body/Blog_body/Blog'
import Initial from './components/Start/Initial';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/Body/Profile/Profile';
import Programming from './components/Body/Programming/Programming';
import Body from './components/Body';
import load from './videos/rocket.mp4'
import './App.css'
export const AppContext = createContext();

const App = () => {

  const [rootUser, setRootUser] = useState({});

  const [toggleState, setToggleState] = useState({
    right: false,
  });


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

  // const [toggleState3, setToggleState3] = useState({
  //   right: false,
  // });



  // const toggleDrawer3 = (anchor, open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }

  //   setToggleState3({ ...toggleState3, [anchor]: open });
  // };


  


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
          // toggleDrawer3,
          // toggleState3,
          // setToggleState3
        }}>

        <Routes>
          <Route  path='*' element={<Body />} />
          <Route path='/login' element={<Initial />} />
        </Routes>
        </AppContext.Provider>
        <ToastContainer />
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
