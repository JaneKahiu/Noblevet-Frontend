import React from 'react';
import Hero from '../home/Hero.jsx';
import FeaturedServices from '../home/FeaturedServices';
import Stats from '../home/Stats';
import WhyChooseUs from '../home/WhyChooseUs';

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedServices />
            <Stats />
            <WhyChooseUs />
        </>
    );
};

export default Home;