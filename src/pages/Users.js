import React from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Userstable from '../components/Userstable';
import '../assets/styles/Users.scss'


const Users = () => {
    return (
        <div className='list'>
            <Sidebar/>
            <div className='listcontainer'>
                <Navbar/>
                <Userstable />
                

            </div>
           
        </div>
    );
};

export default Users;