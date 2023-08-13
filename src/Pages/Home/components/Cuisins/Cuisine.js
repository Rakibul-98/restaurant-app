import React from 'react';
import CuisineCard from '../../../Cards/CuisineCard/CuisineCard';

const Cuisine = () => {
    return (
        <div>
            <div className='cuisine-menu-div'>
                <ul>
                    <li>Indian</li>
                    <li>Chinese</li>
                    <li>Thai</li>
                    <li>Italian</li>
                    <li>American</li>
                </ul>
            </div>
            <CuisineCard/>
        </div>
    );
};

export default Cuisine;