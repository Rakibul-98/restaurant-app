import React from 'react';
import BannerText from '../../../Shared/BannerText/BannerText';

const ExploreMenu = () => {
    const menuInfo ={
        title:"Explore Our Menu",
        text:"Embark on a Culinary Journey: Explore Our Exquisite Menu",
        style:"bg-gradient-to-r from-lime-900 to-transparent py-16"
    }
    return (
        <div className="bg-[url('https://i.ibb.co/sJt1sMD/menubg.jpg')] bg-no-repeat bg-center bg-cover">
            <BannerText info={menuInfo}></BannerText>
        </div>
    );
};

export default ExploreMenu;