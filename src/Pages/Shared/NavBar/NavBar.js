import React, { useState } from 'react';
import { FaBurger } from 'react-icons/fa6';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const NavBar = () => {

    const [state, setState] = useState("1");

    const navLink = [
        { id: 1, name: "Home", path: "#banner" },
        { id: 2, name: "Signature", path: "#signature" },
        { id: 3, name: "Gallery", path: "#gallery" },
        { id: 7, name: "Service", path: "#service" },
        { id: 4, name: "Reviews", path: "#review" },
        { id: 5, name: "Cuisine", path: "#cuisine" },
        { id: 6, name: "Chefs", path: "#chef" },
    ]

    const handleMenu = () => {
        const open = document.getElementById("open");
        const close = document.getElementById("close");
        const menu = document.getElementById("small-nav");


        if (open.style.display === "") {
            close.style.display = ""
            open.style.display = "none"
            menu.style.display = ""

        }
        else {
            open.style.display = ""
            close.style.display = "none"
            menu.style.display = "none"
        }
    }
    
    const handleActive = (id) =>{
        setState(id);
    }

    return (
        <div className='w-10/12 mx-auto -mt-16 uppercase font-semibold'>
            <div id='navbar' className='flex justify-between items-center py-3 relative'>
                <a href="/"><img className='h-10 hover:rotate-[720deg] hover:scale-125 duration-500' src="https://i.ibb.co/GkTWfnX/fav-2.png" alt="" /></a>
                <ul id='large-nav' className='large-nav md:flex hidden'>
                    {
                        navLink.map(nl =>
                            <li onClick={()=>handleActive(`${nl.id}`)} className={state === `${nl.id}` ? `text-lime-400 border-b-2 border-lime-400` : ``} key={nl.id}><a className='md:mx-3 xl:mx-6' href={nl.path}>{nl.name}</a></li>
                        )
                    }
                </ul>
                <div className='md:hidden'>
                    <button className='text-3xl hover:text-lime-300' onClick={handleMenu}>
                        <p id='open' className='animate-bounce hover:animate-none'><FaBurger /></p>
                        <span style={{ display: "none" }} id='close' ><MdOutlineRestaurantMenu /></span>
                    </button>

                    <ul id='small-nav' style={{ display: "none" }} className='absolute -right-10 text-center top-16 bg-slate-500 w-6/12 rounded-b-lg'>
                        {
                            navLink.map(nl =>
                                <li className={state === `${nl.id}` ? `text-lime-400 m-2` : `text-white m-2`} onClick={()=>handleActive(`${nl.id}`)}  key={nl.id}><a href={nl.path}>{nl.name}</a></li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;