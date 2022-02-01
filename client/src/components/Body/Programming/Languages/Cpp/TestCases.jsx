import React,{useState,useContext} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AppContext } from '../../../../../App';
import { Theme } from '../../../../Theme';
import { IconButton } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';


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

  const { themeToggler } = useContext(AppContext);



  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='test_case' style={{
        backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
        color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
        boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow
      }}>
        <AccordionSummary
          expandIcon={ <IconButton style={{
            color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
          }}><ExpandMoreIcon /></IconButton>}
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
                {/* <textarea className='test_case' id="title" rows={3} value={case1.input} onChange={(e)=>setCase1({...case1,'input': e.target.value})} style={{
                  backgroundColor : themeToggler ? Theme.Dark.FadeBackground : Theme.Light.FadeBackground,
                  color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                }} ></textarea> */}

                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={2}
                    name="description"
                    class="form-control"
                    value={case1.input} 
                    onChange={(e)=>setCase1({...case1,'input': e.target.value})}
                    style={{
                      backgroundColor : themeToggler ? Theme.Dark.FadeBackground : Theme.Light.FadeBackground,
                      color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                      boxShadow : 'none'
                    }}
                  />

            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Output</label>
                {/* <textarea className='test_case' id="title" rows={3} value={case1.output} onChange={(e)=>setCase1({...case1,'output': e.target.value})}  style={{
                  backgroundColor : themeToggler ? Theme.Dark.FadeBackground : Theme.Light.FadeBackground,
                  color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                }}></textarea> */}
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={2}
                    name="description"
                    class="form-control"
                    value={case1.output} 
                    onChange={(e)=>setCase1({...case1,'output': e.target.value})}
                    style={{
                      backgroundColor : themeToggler ? Theme.Dark.FadeBackground : Theme.Light.FadeBackground,
                      color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                      boxShadow : 'none'
                    }}
                  />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='test_case' style={{
        backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
        color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
        boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow
      }}>
        <AccordionSummary
          expandIcon={ <IconButton style={{
            color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
          }}><ExpandMoreIcon /></IconButton>}
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
                {/* <textarea className='test_case' id="title" rows={3} value={case2.input} onChange={(e)=>setCase2({...case2,'input': e.target.value})}  style={{
                  backgroundColor : themeToggler ? Theme.Dark.FadeBackground : Theme.Light.FadeBackground,
                  color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                }}></textarea> */}
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={2}
                    name="description"
                    class="form-control"
                    value={case2.input} 
                    onChange={(e)=>setCase2({...case2,'input': e.target.value})}
                    style={{
                      backgroundColor : themeToggler ? Theme.Dark.FadeBackground : Theme.Light.FadeBackground,
                      color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                      boxShadow : 'none'
                    }}
                />
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Output</label>
                {/* <textarea className='test_case' id="title" rows={3} value={case2.output} onChange={(e)=>setCase2({...case2,'output': e.target.value})}  style={{
                  backgroundColor : themeToggler ? Theme.Dark.FadeBackground : Theme.Light.FadeBackground,
                  color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                }}></textarea> */}
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={2}
                    name="description"
                    class="form-control"
                    value={case2.output} 
                    onChange={(e)=>setCase2({...case2,'output': e.target.value})}
                    style={{
                      backgroundColor : themeToggler ? Theme.Dark.FadeBackground : Theme.Light.FadeBackground,
                      color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                      boxShadow : 'none'
                    }}
                />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='test_case' style={{
        backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
        color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
        boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow
      }}>
        <AccordionSummary
          expandIcon={ <IconButton style={{
            color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
          }}><ExpandMoreIcon /></IconButton>}
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
                {/* <textarea className='test_case' id="title" rows={3} value={case3.input} onChange={(e)=>setCase3({...case3,'input': e.target.value})} style={{
                  backgroundColor : themeToggler ? Theme.Dark.FadeBackground : Theme.Light.FadeBackground,
                  color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                }} ></textarea> */}
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={2}
                    name="description"
                    class="form-control"
                    value={case3.input} 
                    onChange={(e)=>setCase3({...case3,'input': e.target.value})}
                    style={{
                      backgroundColor : themeToggler ? Theme.Dark.FadeBackground : Theme.Light.FadeBackground,
                      color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                      boxShadow : 'none'
                    }}
                />
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Output</label>
                {/* <textarea className='test_case' id="title" rows={3} value={case3.output} onChange={(e)=>setCase3({...case3,'output': e.target.value})}  style={{
                  backgroundColor : themeToggler ? Theme.Dark.FadeBackground : Theme.Light.FadeBackground,
                  color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                }}></textarea> */}
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={2}
                    name="description"
                    class="form-control"
                    value={case3.output} 
                    onChange={(e)=>setCase3({...case3,'output': e.target.value})}
                    style={{
                      backgroundColor : themeToggler ? Theme.Dark.FadeBackground : Theme.Light.FadeBackground,
                      color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                      boxShadow : 'none'
                    }}
                />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
