import React from 'react';

const ImplementSearch = () => {
    const data = [
        { name: 'shirt', price: 50, description: 'available for flash sale' },
        { name: 'pant', price: 80, description: 'available for flash sale' },
        { name: 'jogger', price: 90, description: 'regular item' },
        { name: 'long jogger', price: 190, description: 'available for flash sale' },
        { name: 'Tank-top', price: 100, description: 'available for flash sale' },
        { name: 'Jeans', price: 40, description: 'regular item' },
        { name: 'T-shirt', price: 50, description: 'available for flash sale' },
    ];

    const targetData = data.filter((item) => item.name.includes('jogger'));

    return <div>
        <h1>Total matched items: {targetData.length}</h1>
    </div>;
};

export default ImplementSearch;