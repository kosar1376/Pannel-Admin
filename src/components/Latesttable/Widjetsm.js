import React from 'react';
import '../../assets/styles/Widjetsm.scss'
import VisibilityIcon from '@mui/icons-material/Visibility';
import {NewJoin} from '../../Database/NewJoin'

const Widjetsm = () => {
    return (
        <div className='widjetSm'>
           <span className='widjetSmTitle'>New Join Memebers</span>
           <ul className='widjetSmList'>
              {NewJoin.map(item=>
                <li className='widjetSmListItem' key={item.id}>
                   <img className='widjetsmimg' src={item.image} alt='avatat'/>
                   <div className='widjetSmUser'>
                       <span className='widjetSmUsername'>{item.firstname}</span>
                       <span className='widjetSmUserTitle'>{item.carreer}</span>
                   </div>
                   <button className='widjetSmbtn'>
                       <VisibilityIcon className='widjetsmicon'/>
                       Display

                   </button>

               </li>
              )}
           </ul>
        </div>
    );
};

export default Widjetsm;