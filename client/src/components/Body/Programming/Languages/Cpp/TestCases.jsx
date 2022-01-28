import React,{useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions({
    case1,
    case2,
    case3,
    setCase1,
    setCase2,
    setCase3
  }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // const handleTestCases = (index,name,value) =>{

  //   console.log(value);

  //   if(index === 0){
  //     if(name === 'input'){
  //       setCase1({'output' : case1.output,'input':value});
  //     }else{
  //       setCase1({'input' : case1.input,'output':value});
  //     }
  //     // testCases[0] = case1;
  //     // console.log(case1);
  //     // setTestCases(testCases)
  //   }
  //   else if(index === 1){
  //     // setCase2({...case2,[name]:value});
  //     if(name === 'input'){
  //       setCase2({...case2,'input':value});
  //     }else{
  //       setCase2({...case2,'output':value});
  //     }
  //     // testCases[1] = case2;
  //     // setTestCases(testCases)
  //   }
  //   else if(index === 2){
  //     // setCase3({...case3,[name]:value});
  //     if(name === 'input'){
  //       setCase3({...case3,'input':value});
  //     }else{
  //       setCase3({...case3,'output':value});
  //     }
  //     // testCases[2] = case3;
  //     // setTestCases(testCases)
  //   }

  //   // console.log(testCases);
  //   console.log(case1,case2,case3);
  // }

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='test_case' >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Test Case 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div class="mb-3">
                <label for="title" class="form-label">Input</label>
                <textarea className='test_case' id="title" rows={3} value={case1.input} onChange={(e)=>setCase1({...case1,'input': e.target.value})} ></textarea>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Output</label>
                <textarea className='test_case' id="title" rows={3} value={case1.output} onChange={(e)=>setCase1({...case1,'output': e.target.value})}  ></textarea>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='test_case'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Test Case 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div class="mb-3">
                <label for="title" class="form-label">Input</label>
                <textarea className='test_case' id="title" rows={3} value={case2.input} onChange={(e)=>setCase2({...case2,'input': e.target.value})}  ></textarea>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Output</label>
                <textarea className='test_case' id="title" rows={3} value={case2.output} onChange={(e)=>setCase2({...case2,'output': e.target.value})}  ></textarea>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='test_case' >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
           Test Case 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div class="mb-3">
                <label for="title" class="form-label">Input</label>
                <textarea className='test_case' id="title" rows={3} value={case3.input} onChange={(e)=>setCase3({...case3,'input': e.target.value})}  ></textarea>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Output</label>
                <textarea className='test_case' id="title" rows={3} value={case3.output} onChange={(e)=>setCase3({...case3,'output': e.target.value})}  ></textarea>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
