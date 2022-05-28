import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axiosPrivate from '../../../api/axiosPrivate';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const { available, price, moq } = data;
        data.available = Number(available);
        data.price = Number(price);
        data.moq = Number(moq);
        console.log(data);
        if (available < moq) {
            toast.error('Minimum Order Qty can not be higher than Stock Qty!', { id: 'moq-error' });
            return;
        }
        console.log(data);
        axiosPrivate.post('https://tools-manufacturer-allumin.herokuapp.com/addnewproduct', data)
            .then(function (response) {
                if (response.data.insertedId) {
                    toast.success('Successfully Added New Product!', { id: 'add-success' })
                }
                e.target.reset();
            })
            .catch(function (error) {
                console.log(error);
                toast.error(error.message, { id: 'add-error' });
            });
    }
    return (
        <div>
            <h1 className='text-3xl font-bold my-10 italic mx-auto text-gray-700 max-w-4xl'>Add a New Product :</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 mx-6 md:mx-4 lg:mx-3 py-5 rounded-lg'>
                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label hidden md:block">
                            <span className="label-text">Enter Product Title</span>
                        </label>
                        <input {...register("title", { required: true })} type="text" placeholder="Enter Product Title" className="text-center input input-bordered w-3/4 mx-auto md:w-full md:max-w-xs mb-1" />
                        {errors.title?.type === 'required' && <p className='text-sm text-red-500 mb-1'>Title is required</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label hidden md:block">
                            <span className="label-text">Enter Product Description</span>
                        </label>
                        <input {...register("description", { required: true })} type="text" placeholder="Enter Product Description" className="text-center input input-bordered w-3/4 mx-auto md:w-full md:max-w-xs mb-1" />
                        {errors.description?.type === 'required' && <p className='text-sm text-red-500 mb-1'>Description is required</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label hidden md:block">
                            <span className="label-text">Enter Product Image URL</span>
                        </label>
                        <input {...register("img", { required: true })} type="text" placeholder="Enter Product Image URL" className="text-center input input-bordered w-3/4 mx-auto md:w-full md:max-w-xs mb-1" />
                        {errors.img?.type === 'required' && <p className='text-sm text-red-500 mb-1'>Image URL is required</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label hidden md:block">
                            <span className="label-text">Enter Stock Qty</span>
                        </label>
                        <input {...register("available", { required: true })} type="number" placeholder="Enter Stock Qty" className="text-center input input-bordered w-3/4 mx-auto md:w-full md:max-w-xs mb-1" />
                        {errors.available?.type === 'required' && <p className='text-sm text-red-500 mb-1'>Stock Qty is required</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label hidden md:block">
                            <span className="label-text">Enter Price</span>
                        </label>
                        <input {...register("price", { required: true })} type="number" placeholder="Enter Price" className="text-center input input-bordered w-3/4 mx-auto md:w-full md:max-w-xs mb-1" />
                        {errors.price?.type === 'required' && <p className='text-sm text-red-500 mb-1'>Price is required</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label hidden md:block">
                            <span className="label-text">Enter Minimum Order Qty</span>
                        </label>
                        <input {...register("moq", { required: true })} type="number" placeholder="Enter Minimum Order Qty" className="text-center input input-bordered w-3/4 mx-auto md:w-full md:max-w-xs mb-1" />
                        {errors.moq?.type === 'required' && <p className='text-sm text-red-500 mb-1'>Minimum Order Qty is required</p>}
                    </div>
                </div>
                <input className="btn btn-primary mt-5" type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;