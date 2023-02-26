import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import axiosPrivate from '../../../api/axiosPrivate';
import auth from '../../../firebase.init';
import Spinners from '../../shared/Spinners';

const Purchase = () => {
    const [{ currentUser }] = useState(auth);
    const [intervals, setIntervals] = useState(1000);
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { isLoading, error, data: itemInfo } = useQuery(['toolsData', intervals], () =>
        fetch(`https://manufacturer-website-server-side-i374.onrender.com/item/${id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        }).then(res =>
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
        toast.error(error.message, { id: 'load-error' })
    }
    const { available, description, img, moq, price, title } = itemInfo;

    const onSubmit = (data, e) => {
        const { reqQty } = data;
        data.reqQty = Number(reqQty);
        data.toolId = id;
        data.status = 'pending';
        data.shipment = 'pending';
        data.price = price;
        data.itemName = title;
        data.img = img;
        data.orderValue = (Number(price) * data.reqQty);
        const newQty = available - (data.reqQty);
        if (data.reqQty < moq) {
            toast.error(`Minimum ${moq} pcs need to added in Cart`, { id: 'moq_error' });
            return;
        }
        if (data.reqQty > available) {
            toast.error(`Maximum ${available} pcs Can be added in Cart`, { id: 'max_error' });
            return;
        }
        axiosPrivate.post('https://manufacturer-website-server-side-i374.onrender.com/placeorder', data)
            .then(async function (response) {
                itemInfo.available = newQty;
                let newInfo = itemInfo;
                delete newInfo._id;
                // Updating Stock Data
                updateQty(data.toolId, newInfo);
                e.target.reset();
            })
            .catch(function (error) {
                toast.error(error.message, { id: 'order-error' });
            });
    };

    // Function for updating available stock
    async function updateQty(targetID, updatedData) {
        try {
            const response = await axiosPrivate.put(`https://manufacturer-website-server-side-i374.onrender.com/updatestock/${targetID}`, updatedData);
            if (response.status === 200) {
                toast.success('Order placed Successfully.!', { id: 'Success' });
            }
        } catch (error) {
            toast.error(error.message, { id: 'update-error' });
        }
    }
    return (
        <div>
            <h1 className='text-3xl font-bold my-5 italic mx-auto text-gray-700 max-w-4xl'>Want to Order <span className='text-orange-500 font-semibold'>{title}</span> ?</h1>
            <div className='avatar my-3'>
                <div className='w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                    <img src={img} alt='' className="" />
                </div>
            </div>
            <h1 className="text-5xl mt-5 font-bold">{title}</h1>
            <p className="my-5 md:w-2/4 w-3/4 mx-auto">{description}</p>
            <div className='flex justify-center items-center mb-5 mt-2 mx-5 md:mx-0'>
                <div className='md:mr-5 mr-2 border-2 rounded-lg p-5'>
                    <p className='text-md'>Available: <span className='text-orange-500 font-semibold text-xl'>{available}</span> pcs</p>
                    <p className='text-md'>Min-Order-Qty: <span className='text-orange-500 font-semibold text-xl'>{moq}</span> pcs</p>
                    <p className='text-md'>Price: <span className='text-orange-500 font-semibold text-xl'>${price}</span> /pc</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text ml-8">Enter Required Qty:</span>
                            </label>
                            <input defaultValue={moq} {...register("reqQty", { required: true })} type="number" placeholder="Enter Required Qty" className="text-center input input-bordered w-3/4 mx-auto md:w-full md:max-w-xs mb-3" />
                            {errors.reqQty?.type === 'required' && <p className='text-sm text-red-500 mb-1'>Quantity is required</p>}
                        </div>
                    </form>
                </div>

                <div className='border-2 p-5 rounded-lg md:ml-5 ml-2'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text ml-8">Your Name:</span>
                            </label>
                            <input value={currentUser?.displayName} {...register("name", { required: true })} type="text" placeholder="Your Name" className="input input-bordered w-3/4 mx-auto md:w-full md:max-w-xs mb-3" />
                            {errors.name?.type === 'required' && <p className='text-sm text-red-500 mb-1'>Name is required</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text ml-8">Your Email:</span>
                            </label>
                            <input value={currentUser?.email} {...register("email", { required: true })} type="text" placeholder="Your Email" className="input input-bordered w-3/4 mx-auto md:w-full md:max-w-xs mb-3" />
                            {errors.email?.type === 'required' && <p className='text-sm text-red-500 mb-1'>Email is required</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text ml-8">Your Address:</span>
                            </label>
                            <input {...register("address", { required: true })} type="text" placeholder="Your Address" className="input input-bordered w-3/4 mx-auto md:w-full md:max-w-xs mb-3" />
                            {errors.address?.type === 'required' && <p className='text-sm text-red-500 mb-1'>Address is required</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text ml-8">Your Phone Number:</span>
                            </label>
                            <input {...register("phone", { required: true })} type="text" placeholder="Your Phone Number" className="input input-bordered w-3/4 mx-auto md:w-full md:max-w-xs mb-3" />
                            {errors.phone?.type === 'required' && <p className='text-sm text-red-500 mb-1'>Phone Number is required</p>}
                        </div>
                        <input className="btn btn-primary" type="submit" value="Place Order" />
                    </form>
                </div>
            </div>
            <Link className='btn mb-5 mt-10 text-white' to="/items">Go to All-Items</Link>
        </div >
    );
};

export default Purchase;