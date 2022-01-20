import React,{useContext,useEffect} from 'react'
import HeadNav from '../../Navbar/HeadNav'
import SideNav from '../../Navbar/SideNav'
import '../../../style/Body/Blog.css'
import search from '../../../images/icon/search.png'
import BlogContainer from './BlogContainer'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TemporaryDrawer from './CreateBlog'
import { AppContext } from '../../../App'

import { useNavigate } from 'react-router-dom'

const Blog = () => {

    let navigate = useNavigate();

    const {toggleDrawer} = useContext(AppContext)

    
  const getData = async() =>{
    try {
      const res2 = await fetch('/about',{
          method:'GET',
          headers:{
              "Content-Type":"application/json"
          }
      })

          const Data = await res2.json();
      } catch (error) {
          console.log('data not found');
          navigate('/login')
      }
  }

    useEffect(() => {
        getData();
    }, []);

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
                            <Fab color="primary" aria-label="add" onClick={toggleDrawer('right', true)}>
                                <AddIcon />
                            </Fab>
                        </div>
                        <TemporaryDrawer />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog
