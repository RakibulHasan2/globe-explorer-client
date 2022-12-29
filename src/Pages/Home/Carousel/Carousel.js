import React, { useState } from 'react';
import img1 from '../../../images/home-bg-1.jpg'
import img2 from '../../../images/home-bg-2.jpg'
import img3 from '../../../images/home-bg-3.jpg'
const Carousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            {/* <Carousel activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='heading-info'>
                        <h3 className='text-left'>Never Stop</h3>
                        <h1 className='text-left color'>Exploring</h1>
                        <p>Exploring Self is a blog about the journey toward authentic & holistic self love. It’s about seeking all of the joy, laughter and vibrancy that this world has to offer. Exploring Self is about learning to live freely, fully and without-fear. </p>
                        <button className='btn btn-lg bg-success text-white'>Get Started</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
            <div>
                <div className="carousel w-full">
                    {/* 1st slider */}
                    <div id="slide1" className="carousel-item relative w-full">
                        <img alt='' src={img1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <div className="absolute flex justify-end transform -translate-y-1/2 right-20 top-1/2">
                                <div className='max-w-xl'>
                                    <p className='text-3xl font-bold responsive-font mb-2'>Never Stops —</p>
                                    <p className='text-6xl font-bold responsive-font mb-8 text-green-800'>Exploring</p>
                                    <p className='mb-4'>Exploring Self is a blog about the journey toward authentic & holistic self love. It’s about seeking all of the joy, laughter and vibrancy that this world has to offer. Exploring Self is about learning to live freely, fully and without-fear. </p>
                                    <button className='btn text-white bg-green-900 border-none'>Get Started</button>
                                </div>
                            </div>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* 2nd slider */}
                    <div id="slide2" className="carousel-item relative w-full">
                        <img alt='' src={img2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-40 top-1/2">
                            <div className='max-w-xl'>
                                    <p className='text-3xl font-bold responsive-font mb-2'>Never Stops —</p>
                                    <p className='text-6xl font-bold responsive-font mb-8 text-green-800'>Exploring</p>
                                    <p className='mb-4'>Exploring Self is a blog about the journey toward authentic & holistic self love. It’s about seeking all of the joy, laughter and vibrancy that this world has to offer. Exploring Self is about learning to live freely, fully and without-fear. </p>
                                    <button className='btn text-white bg-green-900 border-none'>Get Started</button>
                                </div>
                            </div>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                      {/* 3rd slider */}
                      <div id="slide3" className="carousel-item relative w-full">
                        <img alt='' src={img3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <div className="absolute flex justify-end transform -translate-y-1/2 right-20 top-1/2">
                                <div className='max-w-xl'>
                                    <p className='text-3xl font-bold responsive-font mb-2'>Never Stops —</p>
                                    <p className='text-6xl font-bold responsive-font mb-8 text-green-800'>Exploring</p>
                                    <p className='mb-4'>Exploring Self is a blog about the journey toward authentic & holistic self love. It’s about seeking all of the joy, laughter and vibrancy that this world has to offer. Exploring Self is about learning to live freely, fully and without-fear. </p>
                                    <button className='btn text-white bg-green-900 border-none'>Get Started</button>
                                </div>
                            </div>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;