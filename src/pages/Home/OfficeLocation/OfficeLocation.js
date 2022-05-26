import React from 'react';

const OfficeLocation = () => {
    return (
        <div className='lg:mx-14 md:mx-8 mx-5 mb-20 mt-5'>
            <h1 className='text-3xl font-bold my-10 italic mx-auto text-gray-700 max-w-4xl'>Operating Locations:</h1>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-4 items-center">
                <div className="mb-4">
                    <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="max-w-full h-auto rounded-lg" alt="" />
                    <p className='text-lg my-3 font-semibold'>Dhaka</p>
                </div>

                <div className="mb-4 w-2/4 md:w-full mx-auto">
                    <img src="https://i.pinimg.com/originals/5e/06/d0/5e06d0dad87119043296968b650392a6.jpg" className="md:max-w-full mx-auto h-auto rounded-full border shadow-md" alt="" />
                </div>
                <div className="mb-4">
                    <img src="https://mdbootstrap.com/img/new/standard/city/044.jpg" className="max-w-full h-auto rounded-full" alt="" />
                    <p className='text-lg my-3 font-semibold'>Delhi</p>
                </div>
            </div>
        </div>
    );
};

export default OfficeLocation;