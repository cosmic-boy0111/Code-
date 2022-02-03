import React,{useState,useContext} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import filter from '../../../../../images/icon/filter.png'
import FilterTag from './FilterTag';
import Tag from './Tags'
import Button from '@mui/material/Button';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import { CppContext } from './Cpp';
import { AppContext } from '../../../../../App';
import { Theme } from '../../../../Theme';
import { IconButton } from '@mui/material';

export default function SimpleAccordion() {

  const [selectedTags, setSelectedTags] = useState([]);
  const [expanded, setExpanded] = React.useState(false);

  const {setRows,problems} = useContext(CppContext)
  const {themeToggler} = useContext(AppContext)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const Filter = (event, isExpanded) =>{
    if(selectedTags.length === 0 || selectedTags.length === Tag.length){
      setRows(problems)
      setExpanded(isExpanded ? 'panel1' : false);
      return;
    }
    var filterArray = []
    problems.forEach(element => {
      if(selectedTags.includes(element.mainTag)){
        filterArray.push(element)
      }
    });

    setRows(filterArray)
    setExpanded(isExpanded ? 'panel1' : false);
    
  }

  const cancel = (panel) => (event, isExpanded) => {
    // setExpanded(isExpanded ? panel : false);
    setExpanded(isExpanded ? 'panel1' : false);
    if(selectedTags.length === 0 || selectedTags.length === Tag.length){
      setRows(problems)
      return;
    }
    // setRows((pre)=>{
    //   return pre;
    // })
  };


  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='Accordion_container' style={{
        backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
        color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
        boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow,
        border: themeToggler ? Theme.Dark.Border : Theme.Light.Border
      }}>
        <AccordionSummary
          expandIcon={ <IconButton style={{
            color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
          }}><ExpandMoreIcon /></IconButton> }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          
        >
         <Typography> <img src={filter} alt="" srcset="" className='filter_icon'/> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='tag_container'>
            {
              Tag.map((e)=>{
                return <FilterTag name={e} setSelectedTags={setSelectedTags}/>
              })
            }
          </div>
          </Typography>
          <footer className='accordion_footer'>
            <Button variant="contained" onClick={Filter} style={{
              marginRight:'1rem'
            }} > <FilterAltRoundedIcon /> </Button>
            <Button color="secondary" variant="contained"  onClick={cancel('panel1')}> <CloseRoundedIcon /> </Button>
          </footer>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}


