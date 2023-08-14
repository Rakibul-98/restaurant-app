import React from 'react';

const BannerText = ({ info }) => {
    const btnStyle = "px-10 py-2 uppercase border-2 duration-1000 mt-5";

    return (
        <div className={`banner-container ${info.style}`}>
            <div className="banner-text-div mx-auto w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 lg:ms-32 text-white">
                <h2 className='title'>{info.title}</h2>
                <p className='py-5'>{info.text}</p>
                <button className={`${btnStyle}  hover:bg-black hover:border-black  me-5 `}>Explore</button>
                <button className={`${btnStyle} bg-black border-black hover:bg-transparent`}>Order now</button>
            </div>
        </div>
    );
};

export default BannerText;