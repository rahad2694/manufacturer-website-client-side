import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [useeInfoDB, setUserInfoDB] = useState({});
    // console.log(user);
    return (
        <div>
            <div class="avatar my-3">
                <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL ? user?.photoURL : 'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png'} alt='' />
                </div>
            </div>
            <h1 className=''><span className='text-orange-500 text-2xl'>{user?.displayName}</span></h1>
            <div>

                <div class="flex flex-col w-3/4 mx-auto">
                    <div class="overflow-x-auto sm:-mx-2 lg:-mx-3">
                        <div class="py-2 inline-block min-w-full sm:px-3 lg:px-5">
                            <div class="overflow-hidden">
                                <table class="min-w-full border text-center">
                                    <thead class="border-2">
                                        <tr>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                                                Email
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                                                {user?.email}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-2">
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                Education
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                zxczcdsdcs
                                            </td>
                                        </tr>
                                        <tr class="border-2">
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                Location
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                scdsvdvsdv
                                            </td>
                                        </tr>
                                        <tr class="border-2">
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                Phone
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                adcsawe
                                            </td>
                                        </tr>
                                        <tr class="border-2">
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                Linked In
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                wedwewe
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