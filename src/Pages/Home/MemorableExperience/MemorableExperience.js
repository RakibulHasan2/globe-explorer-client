import React from 'react';
import img from '../../../images/about-img.jpg'
import './MemorableExperience.css'
const MemorableExperience = () => {
    return (
        <div class="flex justify-center items-center experience-body">
            <img src={img} alt="" />
            <div class="content">
                <h3 className='text-green-900 text-4xl font-bold mb-5'>Memorable Outdoor Experiences</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptates corrupti natus necessitatibus beatae voluptatibus, deserunt  quo soluta minima libero laborum, corporis error esse vitae placeat blanditiis reiciendis vel? Minima.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta doloremque placeat porro, ipsam quia at beatae atque odit iste?</p>
                <button className='btn btn-outline-dark hover-btn mt-7'>Read More</button>
            </div>
        </div>
    );
};

export default MemorableExperience;