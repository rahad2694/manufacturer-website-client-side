import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import Spinners from '../shared/Spinners';
import toast from 'react-hot-toast';
import UseGetUser from '../../hooks/UseGetUser';
import axiosPrivate from '../../api/axiosPrivate';

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const [userInfo, isLoading, loadError] = UseGetUser();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data, e) => {
        data.email = user?.email;
        console.log(data);
        const { displayName, photoURL } = data;
        try {
            await updateProfile({ displayName, photoURL });
            const response = await axiosPrivate.put('http://localhost:5000/updateuser', data);
            // console.log(response);
            if (response.status === 200) {
                toast.success('Successfully Updated Profile Information!', { id: 'Success' });
            }
            e.target.reset();
        }
        catch (error) {
            toast.error(error.message, { id: 'updating-error' });
        }

    }
    if (updating || isLoading) {
        return <Spinners></Spinners>
    }
    if (error || loadError) {
        let erroMsg = error || loadError;
        console.log(erroMsg);
        toast.error(erroMsg.message, { id: 'update-error' });
    }
    const { education, linkedin, location, phone } = userInfo;
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
                                                        <input {...register("displayName", { required: true })} defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input input-bordered input-sm w-full max-w-xs" />
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
                                                        <input {...register("photoURL", { required: true })} type="text" defaultValue={user?.photoURL} placeholder="Photo URL" className="input input-bordered input-sm w-full max-w-xs" />
                                                    </td>
                                                </tr>
                                                <tr className="border-2">
                                                    <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                        Linked-In
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                        <input defaultValue={linkedin} {...register("linkedin", { required: true })} type="text" placeholder="Your Linked In Profile" className="input input-bordered input-sm w-full max-w-xs" />
                                                    </td>
                                                </tr>
                                                <tr className="border-2">
                                                    <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap border-r">
                                                        Location
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-4 lg:py-3 py-2 whitespace-nowrap border-r">
                                                        <input defaultValue={location} {...register("location", { required: true })} type="text" placeholder="Your Address" className="input input-bordered input-sm w-full max-w-xs" />
                                                    </td>
                                                </tr>
                                                <tr className="border-2">
                                                    <td className="text-sm text-gray-900 font-light px-4 lg:py-3 py-2 whitespace-nowrap border-r">
                                                        Phone
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-4 lg:py-3 py-2 whitespace-nowrap border-r">
                                                        <input defaultValue={phone} {...register("phone", { required: true })} type="number" placeholder="Your Phone Number" className="input input-bordered input-sm w-full max-w-xs" />
                                                    </td>
                                                </tr>
                                                <tr className="border-  2">
                                                    <td className="text-sm text-gray-900 font-light px-4 lg:py-3 py-2 whitespace-nowrap border-r">
                                                        Education
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-4 lg:py-3 py-2 whitespace-nowrap border-r">
                                                        <input defaultValue={education} {...register("education", { required: true })} type="text" placeholder="Your Education Level" className="input input-bordered input-sm w-full max-w-xs" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <input type="submit" className='btn text-white my-3' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;