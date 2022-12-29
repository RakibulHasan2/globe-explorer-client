import React from 'react';
import './Offer.css'
const Offer = ({ offer }) => {
    // console.log(offer)
    const { name, img, details } = offer
    return (
        <div className='offer-card'>
            <img src={img} alt="" />
            <div className='text-center'>
                <h3 className='text-2xl mt-4 font-bold mb-2'>{name}</h3>
                <p className='mb-3 p-2'>{details}</p>
                <button className='btn btn-outline-dark'>Read More</button>
            </div>
        </div>
    );
};

export default Offer;