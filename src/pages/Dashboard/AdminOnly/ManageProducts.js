import React from 'react';
import UseLoadAllTools from '../../../hooks/UseLoadAllTools';

const ManageProducts = () => {
    const [tools, isLoading, error] = UseLoadAllTools();
    return (
        <div>
            <h1 className='text-3xl font-bold my-10 italic mx-auto text-gray-700 max-w-4xl'>Manage All Products</h1>

        </div>
    );
};

export default ManageProducts;