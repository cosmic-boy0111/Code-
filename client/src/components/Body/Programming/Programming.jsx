import React from 'react';
import HeadNav from '../../Navbar/HeadNav';
import SideNav from '../../Navbar/SideNav';

const Programming = () => {
  return (
    <div className='App'>
            <div className='Body'>
                <div>
                    <SideNav />
                </div>
                <div className='Body_container'>
                    <HeadNav />
                    <div className='Actual_body'>
                    </div>
                </div>

            </div>
        </div>
  )
};

export default Programming;
