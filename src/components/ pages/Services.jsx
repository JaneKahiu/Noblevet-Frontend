import React from 'react';
import ServicesHero from '../services/ServicesHero.jsx';
import OurServices from '../services/OurServices';
import Pricing from '../services/Pricing';
import Process from '../services/Process';
import Emergency from '../services/Emergency';

const Services = () => {
    return (
        <>
            <ServicesHero />
            <OurServices />
            <Process />
            <Pricing />
            <Emergency />
        </>
    );
};

export default Services;