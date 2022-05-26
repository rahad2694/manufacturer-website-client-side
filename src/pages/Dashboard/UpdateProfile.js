import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <div>
                <div class="avatar my-1">
                    <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL ? user?.photoURL : 'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png'} alt='' />
                    </div>
                </div>
                <div>

                    <div class="flex flex-col w-3/4 mx-auto">
                        <div class="overflow-x-auto sm:-mx-2 lg:-mx-3">
                            <div class="py-2 inline-block min-w-full sm:px-3 lg:px-5">
                                <div class="overflow-hidden">
                                    <table class="min-w-full border text-center">
                                        <thead class="border-2">
                                            <tr>
                                                <th scope="col" class="text-sm font-medium text-gray-900 px-4 py-2 border-r">
                                                    Name:
                                                </th>
                                                <th scope="col" class="text-sm font-medium text-gray-900 px-4 py-2 border-r">
                                                    <input defaultValue={user?.displayName} type="text" placeholder="Your Name" class="input input-bordered input-sm w-full max-w-xs" />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-2">
                                                <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                    Email
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                    <input type="text" value={user?.email} placeholder="Your Name" class="input input-bordered input-sm w-full max-w-xs" />
                                                </td>
                                            </tr>
                                            <tr class="border-2">
                                                <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                    Photo URL
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                    <input type="text" defaultValue={user?.photoURL} placeholder="Your Name" class="input input-bordered input-sm w-full max-w-xs" />
                                                </td>
                                            </tr>
                                            <tr class="border-2">
                                                <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                    Education
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                    <input type="text" placeholder="Your " class="input input-bordered input-sm w-full max-w-xs" />
                                                </td>
                                            </tr>
                                            <tr class="border-2">
                                                <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                    Location
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-4 lg:py-3 py-2 whitespace-nowrap border-r">
                                                    <input type="text" placeholder="Your " class="input input-bordered input-sm w-full max-w-xs" />
                                                </td>
                                            </tr>
                                            <tr class="border-2">
                                                <td class="text-sm text-gray-900 font-light px-4 lg:py-3 py-2 whitespace-nowrap border-r">
                                                    Phone
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-4 lg:py-3 py-2 whitespace-nowrap border-r">
                                                    <input type="text" placeholder="Your " class="input input-bordered input-sm w-full max-w-xs" />
                                                </td>
                                            </tr>
                                            <tr class="border-2">
                                                <td class="text-sm text-gray-900 font-light px-4 lg:py-3 py-2 whitespace-nowrap border-r">
                                                    Linked In
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-4 lg:py-3 py-2 whitespace-nowrap border-r">
                                                    <input type="text" placeholder="Your " class="input input-bordered input-sm w-full max-w-xs" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className='btn text-white my-3'>Update</button>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;