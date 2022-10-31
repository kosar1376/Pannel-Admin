import React from 'react';
import '../assets/styles/PageNotFound.scss'
import {Link} from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='PageNotFound'>
            <div className='container404'>

                <div className='content404'>
                    <p className='header'>404</p>
                    <h3 className='oops'>Oops! Page Not Found</h3>
                    <div className='matn'>Sorry.The page you are looking for does not exist.Please check it again</div>
                   <div> <Link to='/home'><button className='btn404'>back home</button></Link></div>
                </div>

                
                    
                


                
            </div>
        </div>
    );
};

export default PageNotFound;