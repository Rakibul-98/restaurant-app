import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Specialty from './components/Specialty/Specialty';
import Gallery from './components/Gallery/Gallery';
import Chefs from './components/Chefs/Chefs';
import Cuisine from './components/Cuisins/Cuisine';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import QuickLinks from './components/QuickLinks/QuickLinks';
import Reviews from './components/Reviews/Reviews';
import Stats from './components/Stats/Stats';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            {/* <Header/> */}
            <Banner/>
            <Specialty/>
            <Gallery/>
            {/* <Cuisine/> */}
            {/* <Stats/> */}
            {/* <Reviews/> */}
            {/* <ExploreMenu/> */}
            {/* <Chefs/> */}
            {/* <QuickLinks/> */}
            {/* <Footer/> */}
        </div>
    );
};

export default Home;