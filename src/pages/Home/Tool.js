import React from 'react';

const Tool = ({ tool }) => {
    const { available, description, img, moq, price, title } = tool;
    return (
        <div class="flex justify-center hover:shadow-xl hover:scale-110 transition ease-in-out delay-300">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img class="rounded-t-lg" src={img} alt="" />
                </a>
                <div class="p-6">
                    <h5 class="text-xl font-bold mb-2">{title}</h5>
                    <p class="text-gray-700 text-base mb-4">{description}</p>
                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;