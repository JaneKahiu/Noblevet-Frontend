import React from 'react';
import ContactsHero from '../contacts/ContactsHero.jsx';
import ContactForm from '../contacts/ContactForm';
import ContactMethods from '../contacts/ContactMethods';
import FAQ from '../contacts/FAQ';
import SupportTeam from '../contacts/SupportTeam';

const Contacts = () => {
    return (
        <>
            <ContactsHero />
            <ContactMethods />
            <ContactForm />
            <FAQ />
            <SupportTeam />
        </>
    );
};

export default Contacts;