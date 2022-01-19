import React from 'react'
import HeadNav from '../Navbar/HeadNav'
import SideNav from '../Navbar/SideNav'
import '../../style/Body/Blog.css'
import search from '../../images/icon/search.png'
import BlogContainer from './Blog_body/BlogContainer'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const Blog = () => {
    return (
        <div className='App'>
            <div className='Body'>
                <div>
                    <SideNav />
                </div>
                <div className='Body_container'>
                    <HeadNav />
                    <div className='Actual_body'>
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
                            <Fab color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog
