import React from 'react';
import InfoTable from './InfoTable';
import ProjectTable from './ProjectTable';

const MyPortfolio = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold mt-3 mb-5 italic mx-auto text-gray-700 max-w-4xl'>Developer Portfolio</h1>
            <div className="avatar online">
                <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img alt='' src="https://avatars.githubusercontent.com/u/94958085?v=4" />
                </div>
            </div>
            <h1 className='text-2xl my-3'>Saiful Islam Rahad</h1>
            <p className='text-sm'>Bachelor of Science, <strong> University of Dhaka</strong></p>
            <InfoTable></InfoTable>
            <h1 className='text-xl font-bold mt-3 mb-5 italic mx-auto text-gray-700 max-w-4xl'>My Projects:</h1>
            <ProjectTable></ProjectTable>
        </div>
    );
};

export default MyPortfolio;