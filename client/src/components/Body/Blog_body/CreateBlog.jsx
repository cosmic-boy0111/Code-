import React,{useContext} from 'react';
import Drawer from '@mui/material/Drawer';
import { AppContext } from '../../../App';
import Button from '@mui/material/Button';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import {Theme} from '../../Theme'

export default function TemporaryDrawer() {
  
    const {toggleState, toggleDrawer, themeToggler} = useContext(AppContext)

  return (
    <div>
      {/* {['right'].map((anchor) => ( */}
        <React.Fragment key={'right'}>
          {/* <Button onClick={toggleDrawer('right', true)}>{'right'}</Button> */}
          <Drawer
            anchor={'right'}
            open={toggleState['right']}
            onClose={toggleDrawer('right', false)}
            className='Blog_drawer'
            
          >
            <section className='create_blog' style={{
              backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor,
              color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
            }}>
                <div className='create_blog_body'>
                    <h2 className='heading blog_header2' style={{
                        backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor,
                      color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
                }}> CREATE BLOG </h2>
                    <form className='blog_form'>
                      <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" style={{
                          backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
                          color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                          boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow
                        }}/>
                      </div>
                      <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea class="form-control" placeholder="Add description ...." id="description" rows={6} style={{
                          backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
                          color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                          boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow
                        }}></textarea>
                      </div>
                    </form>
                </div>
                <footer className='blog_footer_action' style={{
                    backgroundColor : themeToggler ? Theme.Dark.BodyBackgroundColor : Theme.Light.BodyBackgroundColor,
                    color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
                  }}>
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
