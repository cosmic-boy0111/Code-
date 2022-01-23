import React,{useEffect,useContext} from 'react';
import '../../../../../style/Body/Programming/cpp.css'
import logo from '../../../../../images/assets/Programming_language/c-.png'
import Button from '@mui/material/Button';
import Filter from './Filter'
import Table from './Table'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import PostProblem from './PostProblem'
import { AppContext } from '../../../../../App';

const Cpp = () => {

  useEffect(() => {
   
    var myDiv = document.getElementsByClassName('Actual_body')[0];
    myDiv.scrollTop = 0;

  }, []);
  
  const {toggleDrawer3} = useContext(AppContext)

  return <>
    <PostProblem />
    <div className='language_body'>
      <div className='lang_head'>
        <header className='lang_header'>
          <img src={logo} alt="" srcset="" className='logo'/> <h2>Problems</h2>
        </header>
        <Button >Learn</Button>
      </div>
      <Filter />
      <Table />
      <div className='create_post'>
          <Fab color="primary" aria-label="add" onClick={toggleDrawer3('right', true)}>
              <AddIcon />
          </Fab>
      </div>
    </div>
  </>;
};

export default Cpp;
