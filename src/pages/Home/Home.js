import React from 'react';
import CarouselBanner from './CarouselBanner';
import PurchaseSteps from './PurchaseSteps';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <CarouselBanner></CarouselBanner>
            <h1 className='text-3xl  mb-5 mt-10'>Welcome to <span className='font-title text-5xl text-orange-500'>Allumin Apparatus Ltd.</span></h1>
            <h1 className='text-3xl font-bold my-10 italic mx-auto text-gray-700 max-w-4xl'>Exclusive Products</h1>
            <Tools></Tools>
            <PurchaseSteps></PurchaseSteps>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;