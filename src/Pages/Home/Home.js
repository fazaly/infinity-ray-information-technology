import React from 'react';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import PricingInfo from './Pricing/PricingInfo';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <PricingInfo></PricingInfo>
            <Contact></Contact>
        </div>
    );
};

export default Home;