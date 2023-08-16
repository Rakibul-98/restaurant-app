import React from 'react';
import BannerText from '../../../Shared/BannerText/BannerText';

const Banner = () => {

    const bannerInfo = {
        title: "Crafting Culinary Memories with Every Dish, Where Every Flavor Tells a Story of Passion and Taste.",
        text: "Step into a world of flavors and indulge in an unforgettable dining experience, where culinary excellence meets warm hospitality. Here, every visit is an opportunity to experience the extraordinary.",
        style:"bg-gradient-to-r from-slate-900 to-transparent py-20 lg:py-32"
    }

    return (
        <div id='banner' className="bg-[url('https://i.ibb.co/G04D7mX/banner-bg.jpg')] bg-no-repeat bg-center bg-cover">
            <BannerText info={bannerInfo}></BannerText>
        </div>
    );
};

export default Banner;