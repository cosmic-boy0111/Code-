import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
                <textarea className='test_case' id="title" rows={1}></textarea>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Output</label>
                <textarea className='test_case' id="title" rows={1}></textarea>
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
                <textarea className='test_case' id="title" rows={1}></textarea>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Output</label>
                <textarea className='test_case' id="title" rows={1}></textarea>
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
                <textarea className='test_case' id="title" rows={1}></textarea>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Output</label>
                <textarea className='test_case' id="title" rows={1}></textarea>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
