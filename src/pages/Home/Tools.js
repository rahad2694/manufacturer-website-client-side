import React from 'react';
import toast from 'react-hot-toast';
import { QueryClient, useQuery } from 'react-query';
import Spinners from '../shared/Spinners';
import Tool from './Tool';

const queryClient = new QueryClient()

const Tools = () => {
    const { isLoading, error, data:tools } = useQuery('toolsData', () =>
        fetch('toolsData.json').then(res =>
            res.json()
        )
    )
    if(isLoading){
        return <Spinners></Spinners>
    }
    if(error){
        console.log(error);
        toast.error(error.message,{id:'load-error'})
    }
    console.log(tools);
    return (
        <div className='my-12 p-4 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 mx-12'>
            {
                tools.map(tool=><Tool tool={tool}></Tool>)
            }
        </div>
    );
};

export default Tools;