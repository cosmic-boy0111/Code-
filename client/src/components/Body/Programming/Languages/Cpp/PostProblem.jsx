import React,{useContext,useState} from 'react';
import Drawer from '@mui/material/Drawer';
import { AppContext } from '../../../../../App';
import Button from '@mui/material/Button';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import TestCases from './TestCases'
import Tag from './Tag'
export default function TemporaryDrawer() {
  
  const {toggleState3, toggleDrawer3} = useContext(AppContext)

  
  const tags = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const [tag, setTag] = useState([]);

  const diff = [
    'Easy',
    'Medium',
    'Hard'
  ]

  const [difficulty, setDifficulty] = useState('');


  return (
    <div>
      {/* {['right'].map((anchor) => ( */}
        <React.Fragment key={'right'}>
          {/* <Button onClick={toggleDrawer('right', true)}>{'right'}</Button> */}
          <Drawer
            anchor={'right'}
            open={toggleState3['right']}
            onClose={toggleDrawer3('right', false)}
            className='Blog_drawer'
          >
            <section className='create_blog'>
                <div className='create_blog_body'>
                    <h2 className='heading blog_header2'> POST PROBLEM </h2>
                    <form className='blog_form'>
                      <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" />
                      </div>
                      <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea class="form-control" placeholder="Add description ...." id="description" rows={6}></textarea>
                      </div>
                      <div className='selector'>
                        <div class="mb-3 selector_field">
                          <label for="description" class="form-label">Tags</label>
                          <Tag tags={tags} value={tag} setValue={setTag} multi={true}/>
                        </div>
                        <div class="mb-3 selector_field">
                          <label for="description" class="form-label">Difficulty</label>
                          <Tag tags={diff} value={difficulty} setValue={setDifficulty} multi={false}/>
                        </div>
                      </div>
                      

                      <div class="mb-3">
                        <label class="form-label">Test Cases</label>
                        <TestCases />
                      </div>
                    </form>
                </div>
                <footer className='blog_footer_action'>
                  <Button className='back' onClick={toggleDrawer3('right', false)}>

                  
                  {/* <IconButton component="span" onClick={toggleDrawer('right', false)}> */}
                    <ChevronLeftRoundedIcon />
                  {/* </IconButton> */}
                  Back
                  </Button>
                  <div>
                  <Button variant="contained">submit</Button>
                  </div>
                </footer>
            </section>
          </Drawer>
        </React.Fragment>
      {/* ))} */}
    </div>
  );
}
