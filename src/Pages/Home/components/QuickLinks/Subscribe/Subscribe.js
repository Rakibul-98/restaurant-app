import React from 'react';
import SocialLinks from './SocialLinks/SocialLinks';

const Subscribe = () => {
    return (
        <div className="subscribe-div md:flex justify-between pb-10 items-center gap-5">
            <div className="subscribe-content md:w-6/12 ">
                <h5 className='title'>Subscribe Us</h5>
                <p className='w-8/12 md:w-full'>Subscribe us to get exciting offers and vouchers.</p>
                <SocialLinks/>
            </div>
            <div className='subscribe-input-div sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 flex lg:mx-auto mt-5 md:mt-0'>
                <input className='outline-0 bg-slate-100 rounded-full h-10 w-full ps-3 placeholder-black' type="email" name="" id="" placeholder='Enter your email'/>
                <button className='bg-orange-400 hover:bg-lime-400 text-white h-10 px-5 rounded-full -translate-x-12 uppercase duration-500'>subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;