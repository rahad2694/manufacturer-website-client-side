import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    // const handlesubmit = async () => {
    //     // await updateProfile({ displayName, photoURL });
    // }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div>
                <div className="avatar my-1">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL ? user?.photoURL : 'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png'} alt='' />
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col w-3/4 mx-auto">
                            <div className="overflow-x-auto sm:-mx-2 lg:-mx-3">
                                <div className="py-2 inline-block min-w-full sm:px-3 lg:px-5">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full border text-center">
                                            <thead className="border-2">
                                                <tr>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 border-r">
                                                        Name:
                                                    </th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 border-r">
                                                        <input {...register("name", { required: true })} defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input input-bordered input-sm w-full max-w-xs" />
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-2">
                                                    <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                        Email
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                        <p className="input input-bordered input-sm w-full max-w-xs mx-auto text-left">{user?.email}</p>
                                                    </td>
                                                </tr>
                                                <tr className="border-2">
                                                    <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                        Photo URL
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                        <input {...register("photo", { required: true })} type="text" defaultValue={user?.photoURL} placeholder="Your Name" className="input input-bordered input-sm w-full max-w-xs" />
                                                    </td>
                                                </tr>
                                                <tr className="border-2">
                                                    <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                        Linked-In
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                        <input {...register("linkedin", { required: true })} type="text" placeholder="Your " className="input input-bordered input-sm w-full max-w-xs" />
                                                    </td>
                                                </tr>
                                                <tr className="border-2">
                                                    <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                        Location
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-4 lg:py-3 py-2 whitespace-nowrap border-r">
                                                        <input {...register("location", { required: true })} type="text" placeholder="Your " className="input input-bordered input-sm w-full max-w-xs" />
                                                    </td>
                                                </tr>
                                                <tr className="border-2">
                                                    <td className="text-sm text-gray-900 font-light px-4 lg:py-3 py-2 whitespace-nowrap border-r">
                                                        Phone
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-4 lg:py-3 py-2 whitespace-nowrap border-r">
                                                        <input {...register("phone", { required: true })} type="number" placeholder="Your " className="input input-bordered input-sm w-full max-w-xs" />
                                                    </td>
                                                </tr>
                                                <tr className="border-2">
                                                    <td className="text-sm text-gray-900 font-light px-4 lg:py-3 py-2 whitespace-nowrap border-r">
                                                        Education
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-4 lg:py-3 py-2 whitespace-nowrap border-r">
                                                        <input {...register("education", { required: true })} type="text" placeholder="Your " className="input input-bordered input-sm w-full max-w-xs" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <input type="submit" className='btn text-white my-3'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;