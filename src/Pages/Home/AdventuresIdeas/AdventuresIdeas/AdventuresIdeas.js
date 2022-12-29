import React, { useEffect, useState } from 'react';
import Idea from '../Idea/Idea';
import './AdventuresIdeas.css'
const AdventuresIdeas = () => {
    const [ideas, setIdeas]= useState([]);
    useEffect(() => {
         fetch('http://localhost:5000/adventureIdea')
        .then(res =>res.json())
        .then(data => setIdeas(data))
    } ,[])
    return (
        <div>
             <h1 className='text-center mt-10 mb-9 text-4xl font-bold '>Adventures Idea!</h1>
            <div className='flex  justify-evenly responsive-adventure'>
            {
                ideas.map(idea => <Idea
                  key={idea.id}
                   idea = {idea}
                   ></Idea>)
             }
            </div>
        </div>
    );
};

export default AdventuresIdeas;