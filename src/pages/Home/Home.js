import React from 'react';
import CarouselBanner from './CarouselBanner';

const Home = () => {
    return (
        <div>
            <CarouselBanner></CarouselBanner>
            <h1 className='text-xl font-semibold my-5'>Welcome to <span className='font-bold text-orange-500'>Allumin Apparatus</span></h1>
        </div>
    );
};

export default Home;