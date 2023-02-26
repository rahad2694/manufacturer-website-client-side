import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import Spinners from '../shared/Spinners';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L40dAIch1k6RNhZzFzL7j53CjMhlsiN7YRrIUsXDKH9KfY8sJJ3sIcLzcF2C1ZGTHSOP0r9Gf9rJMRWLERBMQ9z00P5u4Hse3');

const Payment = () => {
    const { id } = useParams();
    const [orderDetails, setOrderDetails] = useState([]);
    useEffect(() => {
        async function getItems() {
            try {
                const response = await axiosPrivate.get(`https://manufacturer-website-server-side-i374.onrender.com/order/${id}`);
                setOrderDetails(response.data);
            }
            catch (error) {
                toast.error(error.message, { id: 'error-message' })
            }
        }
        getItems();
    }, [orderDetails, id]);

    if (orderDetails.length === 0) {
        return <Spinners></Spinners>
    }
    return (
        <div>
            <h1 className='text-3xl font-bold my-10 italic mx-auto text-gray-700 max-w-4xl'>Please Complete Payment for:</h1>
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={orderDetails?.img} alt='' />
                </div>
            </div>
            <div className="flex flex-col lg:mx-20 md:mx-8 mx-6">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full border text-center">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                                            Item:
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                                            {orderDetails?.itemName}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                            Order ID:
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                            <span className='text-xs text-orange-500'>{id}</span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                            Quantity:
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                            {orderDetails?.reqQty} pcs
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                            Total Amount:
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                            <span className='text-lg font-semibold'>${orderDetails?.orderValue}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orderDetails={orderDetails} />
                    </Elements>
                </div>
            </div>

            <Link className='btn mb-5 mt-10 text-white hover:text-green-500' to="/dashboard/myorders">Back to My Orders</Link>
        </div>
    );
};

export default Payment;