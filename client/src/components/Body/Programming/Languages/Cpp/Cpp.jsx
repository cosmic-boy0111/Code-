import React,{useEffect,useContext,useState,createContext} from 'react';

import '../../../../../style/Body/Programming/cpp.css'
import logo from '../../../../../images/assets/Programming_language/c-.png'
import Button from '@mui/material/Button';
import Filter from './Filter'
import Table from './Table'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import PostProblem from './PostProblem'
import { toast } from 'react-toastify';
import { AppContext } from '../../../../../App';



export const CppContext = createContext()

const Cpp = () => {



  useEffect(() => {
   
    var myDiv = document.getElementsByTagName("body")[0];
    myDiv.scrollTop = 0;
    window.scrollTo(0, 0);
    
  }, []);


  const [problems, setProblems] = useState([]);

  const [rows, setRows] = useState([]);

  const [toggle, setToggle] = useState(false);

  
  const [problem, setProblem] = useState({
    title : '',
    description : '',
  });

  
  const [tag, setTag] = useState([]);
  const [difficulty, setDifficulty] = useState([]);

  
  
  const [case1, setCase1] = useState(
    {
      input : '',
      output : ''
    }
  );
  const [case2, setCase2] = useState(
    {
      input : '',
      output : ''
    }
  );
  const [case3, setCase3] = useState(
    {
      input : '',
      output : ''
    }
  );



  const getProblems = async() =>{
    try {
      const res = await fetch('/cpp/getProblems',{
        method : 'GET',
        headers : {
          'Content-type' : 'application/json'
        }
      })

      const Data = await res.json();
        setProblems(Data)
        setRows(Data)
      console.log(Data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    
    getProblems();
   
  }, []);



  const doThis = () =>{
    setProblem({
      id : '',
      title : '',
      description :''
    })
    setTag([])
    setDifficulty([])
    
    setCase1(
        {
          input : '',
          output : ''
        }
      );
      setCase2(
        {
          input : '',
          output : ''
        }
      );
      setCase3(
        {
          input : '',
          output : ''
        }
      );

    setToggle(true)
  }
  

  return <>
  <CppContext.Provider value={{
    problems,
    setProblems,
    setRows,
    rows,
    toggle, 
    setToggle,
    problem,
    setProblem,
    tag, 
    setTag,
    difficulty,
    setDifficulty,
    case1,
    case2,
    case3,
    setCase1,
    setCase2,
    setCase3
  }}>
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
          <Fab color="primary" aria-label="add" onClick={doThis}>
              <AddIcon />
          </Fab>
      </div>
    </div>
  </CppContext.Provider>
  </>;
};

export default Cpp;
