import React from 'react';
import toast from 'react-hot-toast';
import UseLoadAllTools from '../../../hooks/UseLoadAllTools';
import Spinners from '../../shared/Spinners';

const ManageProducts = () => {
    const [tools, isLoading, error] = UseLoadAllTools();
     if(isLoading){
        return <Spinners></Spinners>
    }
    if(error){
        toast.error(error.message,{id:'error'});
        return;
    }
    console.log(tools);
    return (
        <div>
            <h1 className='text-3xl font-bold my-10 italic mx-auto text-gray-700 max-w-4xl'>Manage All Products</h1>

        </div>
    );
};

export default ManageProducts;