import React from 'react';
import { BiTime, BiBookContent } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const PackagesCard = ({ pack }) => {
    const { image, place, perPerson, review, _id, details, tourDuration } = pack
    // console.log(pack)
    return (
        <div className="card w-96 bg-base-100 shadow-2xl mb-10">
            <figure><img src={image} className="h-64 w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex'>
                    <div className='flex text-yellow-400 mt-1 mr-5'>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar className='text-gray-300'></AiFillStar>
                    </div>
                    <p className='text-gray-600 font-bold'>{review} review</p>
                </div>
                <h2 className="card-title font-bold text-2xl">{place}</h2>
                <p className='text-orange-700 font-bold text-xl'>${perPerson} <small className='text-gray-500'>/ per person</small></p>
                <div className='flex'>
                    <p className='flex'><BiTime className='mt-1 mr-3'></BiTime> {tourDuration} Days</p>
                    <p className='flex'><BiBookContent className='mt-1 mr-3'></BiBookContent>  G87P, Birmingham</p>
                </div>
                <p>{details.slice(0, 70)} .....</p>
                <div className="card-actions justify-end mt-5">
                    <Link to= {`/packages/${_id}`}>
                        <button className="btn btn-outline">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PackagesCard;