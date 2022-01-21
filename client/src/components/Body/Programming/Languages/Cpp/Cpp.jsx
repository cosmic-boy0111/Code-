import React,{useEffect} from 'react';
import '../../../../../style/Body/Programming/cpp.css'
import logo from '../../../../../images/assets/Programming_language/c-.png'
import Button from '@mui/material/Button';
import Filter from './Filter'
import Table from './Table'

const Cpp = () => {

  useEffect(() => {
   
    var myDiv = document.getElementsByClassName('Actual_body')[0];
    myDiv.scrollTop = 0;
  }, []);
  

  return <>
    <div className='language_body'>
      <div className='lang_head'>
        <header className='lang_header'>
          <img src={logo} alt="" srcset="" className='logo'/> <h2>Problems</h2>
        </header>
        <Button >Learn</Button>
      </div>
      <Filter />
      <Table />
    </div>
  </>;
};

export default Cpp;
