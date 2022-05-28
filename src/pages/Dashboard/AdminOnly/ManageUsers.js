import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axiosPrivate from '../../../api/axiosPrivate';
import Spinners from '../../shared/Spinners';
import MakeAdminModal from './MakeAdminModal';

const ManageUsers = () => {
    const [open, setOpen] = useState(false);
    const [isMakeAdmin, setIsMakeAdmin] = useState(false);
    const [currentId, setCurrentId] = useState('');
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function getItems() {
            try {
                const response = await axiosPrivate.get('http://localhost:5000/allusers');
                setUsers(response.data);
            }
            catch (error) {
                toast.error(error.message, { id: 'error-message' })
            }
        }
        getItems();
    }, [users]);
    useEffect(() => {
        if (isMakeAdmin) {
            const data = { role: 'admin' };
            try {
                setIsMakeAdmin(false);
                axiosPrivate.put(`http://localhost:5000/makeadmin/${currentId}`, data)
                    .then(response => {
                        // console.log(response);
                        if (response.data.modifiedCount > 0) {
                            toast.success('Successfully Made an Admin!', { id: 'Success' });
                        }
                    })
                    .catch(error => {
                        toast.error(error.message, { id: 'make-admin-error' });
                    })
            }
            catch (error) {
                toast.error(error.message, { id: 'updating-error' });
            }
        }
    }, [currentId, isMakeAdmin]);

    if (users.length === 0) {
        return <Spinners></Spinners>
    }
    const handleMakeAdmin = async (id) => {
        setOpen(!open);
        setCurrentId(id);
    }
    return (
        <div>
            <h1 className='text-3xl font-bold my-10 italic mx-auto text-gray-700 max-w-4xl'>Manage Users: {users?.length}</h1>
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
                                            User:
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 border-r">
                                            Name:
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2">
                                            Action/Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users?.map((user, index) => <tr key={user?._id} index={index} className="border-b">
                                            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{index + 1}</td>
                                            <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                <div className="avatar">
                                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img src={user?.photoURL? user?.photoURL:'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt='User avatar' />
                                                    </div>
                                                </div><p className=''>{user?.email}</p>
                                            </td>
                                            <td title={user?.ref} className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                {user?.displayName}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                                                {!user?.role && <button onClick={() => handleMakeAdmin(user?._id)} className='btn btn-xs text-white hover:text-red-500'>Make Admin</button>}
                                                {user?.role === 'admin' && <p className='text-green-500'>Already Admin</p>}
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <MakeAdminModal open={open} setOpen={setOpen} setIsMakeAdmin={setIsMakeAdmin}></MakeAdminModal>
        </div>
    );
};

export default ManageUsers;