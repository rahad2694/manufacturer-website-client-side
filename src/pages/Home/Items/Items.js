import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import UseLoadAllTools from '../../../hooks/UseLoadAllTools';
import Spinners from '../../shared/Spinners';
import Tool from '../Tool';


const Items = () => {
    const [tools, isLoading, error] = UseLoadAllTools();
    if (isLoading) {
        return <Spinners></Spinners>
    }
    if (error) {
        toast.error(error.message, { id: 'load-error' })
    }
    return (
        <div className='my-12 mx-12'>
            <h1 className='text-3xl font-bold my-10 italic mx-auto text-gray-700 max-w-4xl'>Our Products</h1>
            <div className='p-4 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    tools?.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
            <Link className='btn mb-5 mt-10 text-white' to="/">Back to Home Page</Link>
        </div>
    );
};

export default Items;