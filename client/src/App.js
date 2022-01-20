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


export const AppContext = createContext();

const App = () => {


  const [toggleState, setToggleState] = useState({
    right: false,
  });

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
        }}>

        <Routes>
          <Route exact path='/' element={<Blog />} />
          <Route exact path='/login' element={<Initial />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/programming' element={<Programming />} />
        </Routes>
        </AppContext.Provider>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
