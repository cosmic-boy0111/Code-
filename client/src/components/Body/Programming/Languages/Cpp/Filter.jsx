import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import filter from '../../../../../images/icon/filter.png'
import FilterTag from './FilterTag';
import Button from '@mui/material/Button';


export default function SimpleAccordion() {

  const Tag = ['Array','String','Linked List','Stack','Queue','Heap','Binary Search','Tree','Graph','Sliding Window','Greedy','Dynamic','Bit Manipulation','Number Theory']
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='Accordion_container'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
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
                return <FilterTag name={e}/>
              })
            }
          </div>
          </Typography>
          <footer className='accordion_footer'>
            <Button variant="contained" onClick={handleChange('panel1')}>filter</Button>
          </footer>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}


