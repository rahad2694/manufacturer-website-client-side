import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Link to="/">
                <div className='flex justify-center align-middle'>
                    <img src="https://i.ibb.co/VYFFK7R/notfound.gif" alt="" />
                </div>
            </Link>
        </div>
    );
};

export default NotFound;