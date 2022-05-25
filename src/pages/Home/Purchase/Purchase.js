import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Spinners from '../../shared/Spinners';

const Purchase = () => {
    const [user] = useState(auth);
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        const {reqQty} = data;
        data.reqQty = Number(reqQty);
        console.log(data)
    };
    const { isLoading, error, data: itemInfo } = useQuery('toolsData', () =>
        fetch(`https://tools-manufacturer-allumin.herokuapp.com/item/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Spinners></Spinners>
    }
    if (error) {
        console.log(error);
        toast.error(error.message, { id: 'load-error' })
    }
    const { _id, available, description, img, moq, price, title } = itemInfo;

    // console.log(itemInfo);
    // console.log(id);
    return (
        <div>
            <h1 className='text-3xl font-bold my-5 italic mx-auto text-gray-700 max-w-4xl'>Want to Order <span className='text-orange-500 font-semibold'>{title}</span> ?</h1>
            <div className="hero bg-white">
                <div className="hero-content flex-col lg:flex-row avatar">
                    <div className='w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                        <img src={img} alt='' className="" />
                    </div>
                    <div className='lg:pt-28 mt-4'>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{description}</p>
                        <div className='flex items-center justify-between border-2 rounded-lg lg:p-10 p-5'>
                            <div>
                                <p className='text-md'>Available: <span className='text-orange-500 font-semibold text-xl'>{available}</span> pcs</p>
                                <p className='text-md'>Min-Order-Qty: <span className='text-orange-500 font-semibold text-xl'>{moq}</span> pcs</p>
                                <p className='text-md'>Price: <span className='text-orange-500 font-semibold text-xl'>${price}</span> /pc</p>

                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div class="form-control w-full max-w-xs">
                                        <label class="label">
                                            <span class="label-text ml-8">Enter Required Qty:</span>
                                        </label>
                                        {errors.firstName?.type === 'required' && "First name is required"}
                                        <input defaultValue={moq} {...register("reqQty", { required: true })} type="number" placeholder="Enter Required Qty" class="input input-bordered w-3/4 mx-auto md:w-full md:max-w-xs mb-3" />
                                    </div>

                                    <input className="btn btn-primary" type="submit" value="Add to Cart" />
                                </form>

                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>

                            <div className='border-2 p-2'>
                                <p className='text-md'>Available: <span className='text-orange-500 font-semibold text-xl'>{available}</span> pcs</p>
                                <p className='text-md'>Min-Order-Qty: <span className='text-orange-500 font-semibold text-xl'>{moq}</span> pcs</p>
                                <p className='text-md'>Price: <span className='text-orange-500 font-semibold text-xl'>${price}</span> /pc</p>
                                <button className="btn btn-primary">Get Started</button>
                                <p className='text-md'>Price: <span className='text-orange-500 font-semibold text-xl'>${price}</span> /pc</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Purchase;