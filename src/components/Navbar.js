import React,{useState} from 'react';
import '../assets/styles/Navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';


const Navbar = () => {
 
    const [focus,setFocus]=useState(false)
    

   

    return (
        <div className='navbar'>
            <din className='wrapper'>
                <div className='search'>
                    <input type='search' placeholder="Search..." id='idd' />
                    <SearchOutlinedIcon  className='icon' onClick={()=>{setFocus(!focus);focus&& document.getElementById('idd').focus();focus && document.getElementById('idd').removeAttribute("placeholder")}} />
                    
                </div>
                <div className='items'>
                    <div className='item'>
                    <LanguageOutlinedIcon className='icon'/>
                    English

                    </div>

                    <div className='item'>
                    <ChatOutlinedIcon className='icon'/>
                    <div className='counter'>0</div>
                   

                    </div>

                    <div className='item'>
                        <ListOutlinedIcon className='icon'/>
                    </div>

                    <div className='item'>
                        <DarkModeOutlinedIcon className='icon icon1'/>
                    </div>


                    <div className='item'>
                    <NotificationsNoneOutlinedIcon className='icon'/>
                    <div className='counter'>0</div>
                    

                    </div>

                    <div>
                        <img src='https://images.freeimages.com/images/large-previews/88f/farewell-1528550.jpg' className='img'/>
                    </div>
                   
                </div>

            </din>
            
        </div>
    );
};

export default Navbar;