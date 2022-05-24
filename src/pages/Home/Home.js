import React from 'react';
import CarouselBanner from './CarouselBanner';
import PurchaseSteps from './PurchaseSteps';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <CarouselBanner></CarouselBanner>
            <h1 className='text-xl font-semibold my-5'>Welcome to <span className='font-bold text-orange-500'>Allumin Apparatus</span></h1>
            <PurchaseSteps></PurchaseSteps>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;