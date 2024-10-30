import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/popular/Popular';
import Offer from '../components/Offers/Offer';
import NewCollection from '../components/NewCollection/NewCollection';
import NewsLetter from '../components/Newsletter/NewsLetter';
import BreadCrums from '../components/BreadCrums/BreadCrums';


function Shop(props) {
    return (
        <div>
            <Hero></Hero>
            <Popular></Popular>
            <Offer></Offer>
            <NewCollection></NewCollection>
            <NewsLetter></NewsLetter>
            {/* <BreadCrums></BreadCrums> */}
           </div>
    );
}

export default Shop;