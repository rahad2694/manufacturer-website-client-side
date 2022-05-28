import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axiosPrivate from '../../../api/axiosPrivate';
import Spinners from '../../shared/Spinners';
import DeleteModal from '../DeleteModal';
import MakeShipModal from './MakeShipModal';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function getItems() {
            try {
                const response = await axiosPrivate.get('http://localhost:5000/allorders');
                setOrders(response.data);
            }
            catch (error) {
                toast.error(error.message, { id: 'error-message' })
            }
        }
        getItems();
    }, [orders]);

    // console.log(orders);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [isShip, setIsShip] = useState(false);
    const [currentId, setCurrentId] = useState('');

    useEffect(() => {
        if (isDelete) {
            axiosPrivate.delete(`http://localhost:5000/deleteorderbyadmin/${currentId}`)
                .then(response => {
                    setIsDelete(false);
                    // console.log(response);
                    if (response.data.deletedCount > 0) {
                        toast.success('Successfully Deleted', { id: 'deleted' });
                    }
                })
                .catch(error => {
                    toast.error(error.message, { id: 'delete-error' });
                })
        }

        if (isShip) {
            console.log('Yes Ship');
            const shipData = {shipment:'Delivered'};

            //updating payment status in DB
            axiosPrivate.put(`http://localhost:5000/updateshipment/${currentId}`, shipData)
                .then(response => {
                    console.log(response);
                    if (response.status === 200) {
                        toast.success('Shipment Done & Recorded!', { id: 'ship-add-success' })
                    }
                })
                .catch(error => {
                    toast.error(error.message, { id: 'ship-error' });
                })
        }
    }, [currentId, isDelete, isShip]);

    if (orders.length === 0) {
        return <Spinners></Spinners>
    }

    const handleDelete = async (id) => {
        setOpen(!open);
        setCurrentId(id);
    }
    const handleShip = (id) => {
        setOpen2(!open2);
        setCurrentId(id);
    }

    return (
        <div>
            <h1 className='text-2xl font-bold my-10 italic mx-auto text-gray-700 max-w-4xl'>Manage All Orders: {orders?.length}</h1>

            <div className="flex flex-col w-10/12 mx-auto">
                <div className="overflow-x-auto sm:-mx-3 lg:-mx-5">
                    <div className="py-2 inline-block min-w-full sm:px-4 lg:px-6">
                        <div className="overflow-hidden">
                            <table className="min-w-full border text-center">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 border-r">
                                            SL
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 border-r">
                                            Item Details:
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 border-r">
                                            Order Details:
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 border-r">
                                            Ship info:
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        orders?.map((order, index) => <tr key={order?._id} index={index} className="border-b">
                                            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{index + 1}</td>
                                            <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                <div className="avatar">
                                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img src={order?.img} alt='' />
                                                    </div>
                                                </div><p className=''>{order?.toolId.slice(-8)}</p>
                                            </td>
                                            <td title={order?.ref} className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                <p className='text-xs'>Order ID: <span className='text-orange-500'>{order?._id.slice(-10)}</span></p>
                                                <p className='text-xs'>Amount: <span className='text-orange-500'>{order?.orderValue}</span></p>
                                                <p className='text-xs'>Qty: <span className='text-orange-500'>{order?.reqQty} pcs</span></p>
                                                <p className='text-xs'>Payment: <span className='text-orange-500'>{order?.status}</span></p>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                <p className={`${(order?.shipment==='Delivered')?'text-green-500':'text-red-500'}`}>{order?.shipment ? order?.shipment : 'Not Available'}</p>
                                            </td>

                                            <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                                                <button disabled={order?.status === 'paid'} onClick={() => handleDelete(order?._id)} className='btn btn-xs text-white hover:text-red-500'>{(order?.status === 'paid') ? 'PAID' : 'Delete'}</button> <br />
                                                <button disabled={(order?.shipment==='Delivered')|| (order?.status === 'pending')} onClick={() => handleShip(order?._id)} className='btn btn-xs btn-primary mt-2 text-white hover:text-green-500'>{(order?.status === 'pending') ? 'UnPaid' : 'ship'}</button>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <DeleteModal open={open} setOpen={setOpen} setIsDelete={setIsDelete}></DeleteModal>
            <MakeShipModal open2={open2} setOpen2={setOpen2} setIsShip={setIsShip}></MakeShipModal>

        </div>
    );
};

export default ManageOrders;