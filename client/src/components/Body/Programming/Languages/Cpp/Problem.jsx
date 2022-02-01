import React,{useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { AppContext } from '../../../../../App';
import { Theme } from '../../../../Theme';

export default function ScrollDialog({open,setOpen,problem}) {

  const {themeToggler} = useContext(AppContext)


  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  var [counter, setCounter] = React.useState(1);
  
const diff = ['Easy','Medium','Hard']
const col = ['#00e676','#eeff41','#ff6e40']
  const getDiff = (df) =>{

      return  <span style={{
          backgroundColor: `${col[df]}`,
          borderRadius : '20px',
          fontSize:'15px',
          padding: '.2rem .5rem',
          textTransform:'lowercase'
          
      }}> {diff[df]} </span>;

  }

  const getString = () =>{
      if(problem.subTags === undefined) {
          return ``
      }
      return [ problem.mainTag,...problem.subTags].join()
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        scroll={'body'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
      <div 
        style={{
                backgroundColor: themeToggler
                  ? Theme.Dark.BodyBackgroundColor
                  : Theme.Light.BodyBackgroundColor,
                color: themeToggler ? Theme.Dark.Color : Theme.Light.Color,
              }}>

      
        <DialogTitle id="scroll-dialog-title">
            <div className='problem_header'>
                <div>
                    {getDiff(problem.difficulty)}
                </div>
                <IconButton color='primary' onClick={()=>setOpen(false)}>
                    <ClearRoundedIcon />
                </IconButton>
            </div>
        </DialogTitle>
        <DialogContent >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            className='problem_body'
            style={{
                color: themeToggler ? Theme.Dark.fadeColor : 'none',
            }}

          >
              <h4>{problem.title}</h4>
              <p> {getString()} </p>
              {problem.description === undefined ? `` : problem.description.split('.').map((e)=>{
                  if(e === '') return ``;
                  return <p> {e+'.'} </p>
              })}
              {
                  problem.testCases === undefined ? `` : problem.testCases.map((e,index)=>{
                      if(e.input === '' || e.output === ''){
                          return ``;
                      }
                      return <div className='test_case_holder' style={{
                        color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
                      }}>
                            <h6>Example {counter++}</h6>
                            <div className='input_output' style={{
                              backgroundColor: themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor
                            }}>
                                <div>Input : {e.input}</div>
                                <div>Output : {e.output}</div>
                            </div>
                      </div>
                  })
              }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
        </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
