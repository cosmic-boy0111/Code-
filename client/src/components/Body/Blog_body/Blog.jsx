import React,{useContext,useEffect} from 'react'
import '../../../style/Body/Blog.css'
import search from '../../../images/icon/search.png'
import BlogContainer from './BlogContainer'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TemporaryDrawer from './CreateBlog'
import { AppContext } from '../../../App'


const Blog = () => {


    const {toggleDrawer} = useContext(AppContext)
    
    useEffect(() => {
        var myDiv = document.getElementsByClassName('Actual_body')[0];
        myDiv.scrollTop = 0;
    }, []);
    

    return (
        <>
            <div className='blog_search'>
                <img src={search} alt="" srcset="" className='search_icon'/>
                <input type="text" name="" id="" className='search_bar' placeholder='Search blog...'/>
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

