import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './PackageDetails.css'
import { AiFillStar } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { TiTickOutline } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';
import { BiTime, BiBookContent } from 'react-icons/bi';
import BookingPackages from '../BookingPackages/BookingPackages';

const PackagesDetails = () => {
    const packDetails = useLoaderData()
    const { detailsImage, age, destination, departure, departureTime, Included, image, place, perPerson, review, _id, details, tourDuration, } = packDetails
    // console.log(packDetails)
         
    




    return (
        <div>
            {/* details page header */}
            <div className='detailsPic lg:flex items-center mb-10'>
                <div className=' lg:mt-24 lg:ml-36'>
                    <div className='flex'>
                        <div className='flex text-yellow-400 mt-1 mr-5'>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar className='text-gray-300'></AiFillStar>
                        </div>
                        <p className='text-white font-bold  mb-2'>{review} review</p>
                    </div>
                    <h1 className='text-4xl font-bold text-white  mb-5'>{place}</h1>
                    <p className='text-orange-500 font-bold text-xl'>${perPerson} <small className='text-white'>/ per person</small></p>
                    <button className="btn bg-orange-700 border-none mt-6">Book Now</button>
                </div>
            </div>
            <div className='lg:flex justify-evenly p-10'>
                {/* details info */}
                <div className='lg:w-3/5'>
                    <h1 className='text-4xl font-bold mb-7'>Overview</h1>
                    <p className='text-justify'>{details.slice(0, 335)} <br /> <br />{details.slice(335, 605)}  </p>
                    <div className='flex justify-around mt-10 text-lg text-gray-500 font-bold'>
                        <p className='flex'><BiTime className='mt-1 mr-3 text-orange-500'></BiTime> {tourDuration} Days</p>
                        <p className='flex'><BsPeople className='mt-1 mr-3 text-orange-500'></BsPeople>Age {age} + </p>
                        <p className='flex'><BiBookContent className='mt-1 mr-3  text-orange-500'></BiBookContent>  G87P, Birmingham</p>
                    </div>
                    <div className='mt-10 mb-10'>
                        <div className='border flex'>
                            <h1 className='w-64 border p-8 font-bold'>Destination :</h1>
                            <h1 className='w-96 p-8 text-gray-700'>{destination}</h1>
                        </div>
                        <div className='border flex'>
                            <h1 className='w-64 border p-8 font-bold'>Departure :</h1>
                            <h1 className='w-96 p-8 text-gray-700'>Yes Required</h1>
                        </div>
                        <div className='border flex'>
                            <h1 className='w-64 border p-8 font-bold'>Departure Time :</h1>
                            <h1 className='w-96 p-8 text-gray-700'>{destination}</h1>
                        </div>
                        <div className='border flex'>
                            <h1 className='w-64 border p-8 font-bold'>Included :</h1>
                            <div className='w-96 p-8 text-gray-700'>
                                {
                                    Included.map(inc => <p className='flex'><TiTickOutline className='mt-1 mr-2 text-green-700'></TiTickOutline> {inc}</p>)
                                }
                            </div>
                        </div>
                        <div className='border flex'>
                            <h1 className='w-64 border p-8 font-bold'>Excluded :</h1>
                            <div className='w-96 p-8 text-gray-700'>
                                <p className='flex'><RxCross2 className='mt-1 mr-2 text-red-700'></RxCross2> Air fares</p>
                                <p className='flex'><RxCross2 className='mt-1 mr-2 text-red-700'></RxCross2> Air fares</p>
                                <p className='flex'><RxCross2 className='mt-1 mr-2 text-red-700'></RxCross2> Air fares</p>
                                <p className='flex'><RxCross2 className='mt-1 mr-2 text-red-700'></RxCross2> Air fares</p>

                            </div>
                        </div>
                    </div>
                </div>
                {/* booking information */}
                <div className='lg:w-1/3 lg:h-3/6 border bg-gray-300 rounded-xl'>
                    <BookingPackages
                    key={_id}
                    _id = {_id}
                    ></BookingPackages>
                </div>
            </div>
        </div>
    );
};

export default PackagesDetails;