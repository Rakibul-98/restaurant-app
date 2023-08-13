import React from 'react';

const Banner = () => {
    const btnStyle = "px-10 py-2 uppercase border-2 duration-1000 mt-5";

    return (
        <div className="bg-[url('https://i.ibb.co/G04D7mX/banner-bg.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="banner-container bg-gradient-to-r from-slate-900 to-transparent">
                <div className="banner-text-div mx-auto w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 lg:ms-32 text-white py-20 lg:py-32">
                    <h2 className='title'>Crafting Culinary Memories with Every Dish, Where Every Flavor Tells a Story of Passion and Taste.</h2>
                    <p className='pt-10'>Step into a world of flavors and indulge in an unforgettable dining experience, where culinary excellence meets warm hospitality. Here, every visit is an opportunity to experience the extraordinary.</p>
                    <button className={`${btnStyle}  hover:bg-black hover:border-black  me-5 `}>Explore</button>
                    <button className={`${btnStyle} bg-black border-black hover:bg-transparent`}>Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;