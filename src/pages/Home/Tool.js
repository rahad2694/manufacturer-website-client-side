import React from 'react';
import { Link } from 'react-router-dom';
import UseGetUser from '../../hooks/UseGetUser';

const Tool = ({ tool }) => {
    const { _id, available, description, img, moq, price, title } = tool;
    const [userInfo, isLoading, error] = UseGetUser();

    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm lg:hover:scale-110 transition ease-in-out delay-300 hover:shadow-xl">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-t-lg" src={img} alt="" />
                </a>
                <div className="p-6">
                    <h5 className="text-2xl font-bold mb-3">{title}</h5>
                    <p className="text-gray-700 text-base mb-4">{description}</p>
                    <p className='text-md'>Available: <span className='text-orange-500 font-semibold text-xl'>{available}</span> pcs</p>
                    <p className='text-md'>Min-Order-Qty: <span className='text-orange-500 font-semibold text-xl'>{moq}</span> pcs</p>
                    <p className='text-md'>Price: <span className='text-orange-500 font-semibold text-xl'>${price}</span> /pc</p>
                    {!userInfo?.role && <Link to={`/purchase/${_id}`} className="btn btn-md  text-white mt-4">Purchase</Link>}
                    {(userInfo?.role === 'admin') && <Link to='/dashboard/manageproducts' className="btn btn-md  text-white mt-4">Manage</Link>}
                </div>
            </div>
        </div>
    );
};

export default Tool;