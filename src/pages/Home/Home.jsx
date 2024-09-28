import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Offer from './Offer';
import Cars from './Cars';
import CardSample from './CardSample';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutUs/>
            <Offer/>
            <Cars/>
            <Reviews/>
        </div>
    );
};

export default Home;