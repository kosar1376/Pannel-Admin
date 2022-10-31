import React from 'react';
import '../assets/styles/Featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Featured = () => {
    return (
        <div className='featured'>
       <div className='top'>
           <h1 className='title'>Total Revenue</h1>
           <MoreVertOutlinedIcon  fontSize='small'/>
       </div>
       <div className='bottom'>
           <div className='featuredchart'>
               <CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>

           </div>
           <p className='title'>Total sales made today</p>
           <p className='amount'> $420</p>
           <p className='des'>previous transaction processing.Last payments may not be included </p>
           <div className='summery'>
               <div className='item'>

               </div>
           </div>
       </div>
        </div>
    );
};

export default Featured;