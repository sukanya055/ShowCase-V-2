import React from 'react';
import Amazing from '../Pages/Amazing/Amazing';
import Count from '../Pages/Count/Count';
import Hero from '../Pages/Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero />
            <Amazing /> 
            <Count/>
        </div>
    );
};

export default Home;