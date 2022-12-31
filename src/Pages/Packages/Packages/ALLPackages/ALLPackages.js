import React, { useEffect, useState } from 'react';
import PackagesCard from '../PackagesCard/PackagesCard';

const ALLPackages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    console.log(packages)
    return (
        <div>
            <h1 className='text-4xl font-bold text-green-900 text-center mt-10 mb-10'>Our Most Popular Adventures</h1>
            <div className='lg:grid grid-cols-3 lg:pl-10'>
                {
                    packages.map(pack => <PackagesCard
                    key={pack.id}
                    pack = {pack}
                    ></PackagesCard>)
                }
            </div>
        </div>
    );
};

export default ALLPackages;