import React from 'react';
import SideNav from '../../Navbar/SideNav';
import HeadNav from '../../Navbar/HeadNav';

const Profile = () => {
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

export default Profile;
