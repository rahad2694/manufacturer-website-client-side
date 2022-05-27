import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import UseLoadAllTools from '../../../hooks/UseLoadAllTools';
import Spinners from '../../shared/Spinners';
import DeleteModal from '../DeleteModal';

const ManageProducts = () => {
    const [tools, toolLoading, toolError, refetch] = UseLoadAllTools();
 
    console.log(tools);

    // const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [currentId, setCurrentId] = useState('');
    const navigate = useNavigate();
    // const [intervals, setIntervals] = useState(100000);
    // const { isLoading, error, data: orders, refetch } = useQuery(['allProductsData'], () =>
    //     fetch(`http://localhost:5000/ordgjjers/${user?.email}`).then(res =>
    //         res.json()
    //     ),
    //     // {
    //     //     // Refetch the data every second
    //     //     refetchInterval: intervals,
    //     // }
    // )
    useEffect(() => {
        if (isDelete) {
            axios.delete(`http://localhost:5000/delejmteorder/${currentId}`)
                .then(response => {
                    setIsDelete(false);
                    refetch();
                    // console.log(response);
                    if (response.data.deletedCount > 0) {
                        toast.success('Successfully Deleted', { id: 'deleted' })
                    }
                })
                .catch(error => {
                    toast.error(error.message, { id: 'delete-error' });
                })
        }
    }, [currentId, isDelete]);

    if (toolLoading) {
        return <Spinners></Spinners>
    }
    if (toolError) {
        console.log(toolError);
        toast.error(toolError.message, { id: 'load-error' })
    }
    const handleDelete = async (id) => {
        setOpen(!open);
        setCurrentId(id);
    }

    return (
        <div>
            <h1 className='text-3xl font-bold my-10 italic mx-auto text-gray-700 max-w-4xl'>Manage Products: {tools?.length}</h1>

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
                                            Item:
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 border-r">
                                            Name:
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        tools?.map((tool, index) => <tr key={tool?._id} index={index} className="border-b">
                                            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{index + 1}</td>
                                            <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                <div className="avatar">
                                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img src={tool?.img} alt='' />
                                                    </div>
                                                </div><p className=''>{tool?._id.slice(-8)}</p>
                                            </td>
                                            <td title={tool?.ref} className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                {tool?.title}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                                                <button onClick={() => handleDelete(tool?._id)} className='btn btn-xs text-white hover:text-red-500'>Delete</button>
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

        </div>
    );
};

export default ManageProducts;