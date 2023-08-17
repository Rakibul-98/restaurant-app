import React from 'react';
import NavBar from '../../../Shared/NavBar/NavBar';

const Header = () => {

    const nav = document.getElementById('nav');
    window.onscroll = () => { scrollFunction() };
    const scrollFunction = () => {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            nav.style.background = "gray";
        }
        else {
            nav.style.background = "transparent";
        }
    };

    return (
        <div className='text-white relative' id='nav'>
            <NavBar />
        </div>
    );
};

export default Header;