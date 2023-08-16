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
import Services from './components/Services/Services';

const Home = () => {
    return (
        <div className='relative'>
            <div className='sticky top-0 z-50'>
                <Header />
            </div>
            <Banner />
            <Specialty />
            <Gallery />
            <Cuisine />
            <Services />
            <Stats />
            <Reviews />
            <ExploreMenu />
            <Chefs />
            <QuickLinks />
            <Footer />
            
        </div>
    );
};

export default Home;