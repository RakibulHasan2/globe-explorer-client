import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import './Idea.css'
const Idea = ({idea}) => {
    const {name,details, img} = idea
    return (
        <div>
            <img className='idea-img' src={img} alt="" />
            <div>
                <h3 className='text-center mt-3 mb-2 font-bold text-xl'>{name}</h3>
                <p className='idea-details'>{details}</p>
                <button className='btn btn-success see-more'>Read More
                    <MdMoreHoriz className='mx-1'></MdMoreHoriz>
                </button>
            </div>
        </div>
    );
};

export default Idea;