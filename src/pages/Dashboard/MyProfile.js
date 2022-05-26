import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinners from '../shared/Spinners';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [intervals, setIntervals] = useState(1000);
    const { isLoading, error, data: userInfo } = useQuery(['toolsData'], () =>
        fetch(`http://localhost:5000/user/${user?.email}`).then(res =>
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
        console.log(error);
        toast.error(error.message, { id: 'load-error' })
    }
    const { education, linkedin, location, phone } = userInfo;

    return (
        <div>
            <div className="avatar mb-3 mt-5">
                <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL ? user?.photoURL : 'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png'} alt='' />
                </div>
            </div>
            <h1 className=''><span className='text-orange-500 text-2xl'>{user?.displayName}</span></h1>
            <div>

                <div className="flex flex-col w-3/4 mx-auto">
                    <div className="overflow-x-auto sm:-mx-2 lg:-mx-3">
                        <div className="py-2 inline-block min-w-full sm:px-3 lg:px-5">
                            <div className="overflow-hidden">
                                <table className="min-w-full border text-center">
                                    <thead className="border-2">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-5 py-3 border-r">
                                                Email
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-5 py-3 border-r">
                                                {user?.email}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-2">
                                            <td className="text-sm text-gray-900 font-light px-5 py-3 whitespace-nowrap border-r">
                                                Education
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-5 py-3 whitespace-nowrap border-r">
                                              {education}
                                            </td>
                                        </tr>
                                        <tr className="border-2">
                                            <td className="text-sm text-gray-900 font-light px-5 py-3 whitespace-nowrap border-r">
                                                Location
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-5 py-3 whitespace-nowrap border-r">
                                                {location}
                                            </td>
                                        </tr>
                                        <tr className="border-2">
                                            <td className="text-sm text-gray-900 font-light px-5 py-3 whitespace-nowrap border-r">
                                                Phone
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-5 py-3 whitespace-nowrap border-r">
                                                {phone}
                                            </td>
                                        </tr>
                                        <tr className="border-2">
                                            <td className="text-sm text-gray-900 font-light px-5 py-3 whitespace-nowrap border-r">
                                                Linked In
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-5 py-3 whitespace-nowrap border-r">
                                                {linkedin}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <Link className='btn text-white my-3' to="/dashboard/updateprofile">Update Profile</Link>

            </div>
        </div>
    );
};

export default MyProfile;