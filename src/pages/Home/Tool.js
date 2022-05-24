import React from 'react';

const Tool = ({ tool }) => {
    const { available, description, img, moq, price, title } = tool;
    return (
        <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-white max-w-sm lg:hover:scale-110 transition ease-in-out delay-300 hover:shadow-xl">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img class="rounded-t-lg" src={img} alt="" />
                </a>
                <div class="p-6">
                    <h5 class="text-2xl font-bold mb-3">{title}</h5>
                    <p class="text-gray-700 text-base mb-4">{description}</p>
                    <p className='text-md'>Available: <span className='text-orange-500 font-semibold text-xl'>{available}</span> pcs</p>
                    <p className='text-md'>Min-Order-Qty: <span className='text-orange-500 font-semibold text-xl'>{moq}</span> pcs</p>
                    <p className='text-md'>Price: <span className='text-orange-500 font-semibold text-xl'>${price}</span> /pc</p>
                    <button class="btn btn-md  text-white mt-4">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;