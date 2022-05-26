import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Spinners from '../shared/Spinners';
import Tool from './Tool';


const Tools = () => {
    const [intervals, setIntervals] = useState(1000);
    const { isLoading, error, data: tools } = useQuery(['toolsData'], () =>
        fetch('http://localhost:5000/tools').then(res =>
            res.json()
        ),
        {
            // Refetch the data every second
            refetchInterval: intervals,
        }
    )
    // refetch();
    if (isLoading) {
        return <Spinners></Spinners>
    }
    if (error) {
        console.log(error);
        toast.error(error.message, { id: 'load-error' })
    }
    // console.log('data:',tools,'Loading now:',isLoading);
    return (
        <div className='my-12 lg:mx-12 md:mx-8 mx-5'>
            {!isLoading && <div className='p-4 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    tools?.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>}
            <Link className='btn mb-5 mt-10 text-white' to="/items">See More Items</Link>
        </div>
    );
};

export default Tools;