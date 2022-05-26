import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Spinners from '../../shared/Spinners';
import Tool from '../Tool';


const Items = () => {
    const [intervals, setIntervals] = useState(1000);
    const { isLoading, error, data: tools } = useQuery(['allToolsData'], () =>
        fetch('https://tools-manufacturer-allumin.herokuapp.com/alltools').then(res =>
            res.json()
        ),
        {
            // Refetch the data every second
            refetchInterval: intervals,
        }
    )
    if (isLoading) {
        return <Spinners></Spinners>
    }
    if (error) {
        console.log(error);
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