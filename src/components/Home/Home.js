import React from 'react';
import Amazing from '../Pages/Amazing/Amazing';
import Count from '../Pages/Count/Count';
import Hero from '../Pages/Hero/Hero';
import WorksAndQuotes from '../Pages/WorksAndQuotes/WorksAndQuotes';

const Home = () => {
    return (
        <div>
            <Hero />
            <Amazing /> 
            <Count/>
            <WorksAndQuotes/>
        </div>
    );
};

export default Home;