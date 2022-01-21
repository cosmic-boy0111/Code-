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


export const AppContext = createContext();

const App = () => {


  const [toggleState, setToggleState] = useState({
    right: false,
  });

  const [rootUser, setRootUser] = useState({});


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setToggleState({ ...toggleState, [anchor]: open });
  };


  


  return (
    <>
      <BrowserRouter>
        <AppContext.Provider value={{
          toggleState,
          toggleDrawer,
          rootUser, 
          setRootUser
        }}>

        <Routes>
          <Route  path='*' element={<Body />} />
          <Route path='/login' element={<Initial />} />
        </Routes>
        </AppContext.Provider>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
