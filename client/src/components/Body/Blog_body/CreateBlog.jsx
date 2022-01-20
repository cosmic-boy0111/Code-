import React,{useContext} from 'react';
import Drawer from '@mui/material/Drawer';
import { AppContext } from '../../../App';
import Button from '@mui/material/Button';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

export default function TemporaryDrawer() {
  
    const {toggleState, toggleDrawer} = useContext(AppContext)

  return (
    <div>
      {/* {['right'].map((anchor) => ( */}
        <React.Fragment key={'right'}>
          {/* <Button onClick={toggleDrawer('right', true)}>{'right'}</Button> */}
          <Drawer
            anchor={'right'}
            open={toggleState['right']}
            onClose={toggleDrawer('right', false)}
            style={{
                width:'80%'
            }}
          >
            <section className='create_blog'>
                <div className='create_blog_body'>
                    <h2 className='heading blog_header2'> CREATE BLOG </h2>
                    <form className='blog_form'>
                      <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" />
                      </div>
                      <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea class="form-control" placeholder="Add description ...." id="description" rows={6}></textarea>
                      </div>
                    </form>
                </div>
                <footer className='blog_footer_action'>
                  <Button className='back' onClick={toggleDrawer('right', false)}>

                  
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
