import React, { useEffect, useState } from 'react';
import Offer from '../Offer/Offer';
import './Offers.css'
const Offers = () => {
    const [offers, setOffer]= useState([]);

    useEffect(() => {
         fetch('http://localhost:5000/offer')
        .then(res =>res.json())
        .then(data => setOffer(data))
    } ,[])
    // console.log(offers)
    return (
        <div className='mb-5 mt-9'>
            <h1 className='font-bold text-center mb-2 text-4xl'>What We Offer</h1>
            <div className='offer-body p-12'>
                {
                    offers.map(offer => <Offer
                    key={offer.id}
                    offer = {offer}
                    ></Offer>)
                }
            </div>
        </div>
    );
};

export default Offers;