import React from 'react';
import LocationsHero from '../locations/LocationsHero.jsx';
import OurLocations from '../locations/OurLocations';
import LocationMap from '../locations/LocationMap';
import LocationServices from '../locations/LocationServices';
import ContactInfo from '../locations/ContactInfo';

const Locations = () => {
    return (
        <>
            <LocationsHero />
            <OurLocations />
            <LocationServices />
            <LocationMap />
            <ContactInfo />
        </>
    );
};

export default Locations;