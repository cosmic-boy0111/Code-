import React,{useContext,useEffect} from 'react'
import '../../../style/Body/Blog.css'
import search from '../../../images/icon/search.png'
import BlogContainer from './BlogContainer'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TemporaryDrawer from './CreateBlog'
import { AppContext } from '../../../App'
import { Theme } from '../../Theme';

const Blog = () => {


    const {toggleDrawer, themeToggler} = useContext(AppContext)
    
    useEffect(() => {
        var myDiv = document.getElementsByTagName("body")[0];
        myDiv.scrollTop = 0;
        window.scrollTo(0, 0);
    }, []);
    

    return (
        <>
            <div className='blog_search' style={{
                 backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
                 color : themeToggler ? Theme.Dark.Color : Theme.Light.Color,
                 boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow,
                 border: themeToggler ? Theme.Dark.Border : Theme.Light.Border
            }}>
                <img src={search} alt="" srcset="" className='search_icon'/>
                <input type="text" name="" id="" className='search_bar' placeholder='Search blog...' style={{
                    color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
                }}/>
            </div>
            <section className='blog_body'>
                <BlogContainer />
                <BlogContainer />
                <BlogContainer />
                <BlogContainer />
                <BlogContainer />
                <BlogContainer />
            </section>
            <div className='create_post'>
                <Fab color="primary" aria-label="add" onClick={toggleDrawer('right', true)}>
                    <AddIcon />
                </Fab>
            </div>
            <TemporaryDrawer />
        </>
    )
}

export default Blog

