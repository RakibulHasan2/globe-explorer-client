import React from 'react';
import Carousel from '../Carousel/Carousel';
import MemorableExperience from '../MemorableExperience/MemorableExperience';
import Offers from '../WhatWeOffer/Offers/Offers';
import AdventuresIdeas from './../AdventuresIdeas/AdventuresIdeas/AdventuresIdeas';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <AdventuresIdeas></AdventuresIdeas>
            <MemorableExperience></MemorableExperience> 
            <Offers></Offers>

        </div>
    );
};

export default Home;