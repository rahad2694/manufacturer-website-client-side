import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [rated, setRated] = useState(0);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        if (rated > 0) {
            data.rated = rated;
            data.displayName = user?.displayName;
            data.photoURL = user?.photoURL;
            data.email = user?.email;
            axiosPrivate.post('http://localhost:5000/addrating', data)
                .then(function (response) {
                    if (response.data.insertedId) {
                        toast.success('Thank you for your feedback!', { id: 'rating-success' })
                    }
                    e.target.reset();
                })
                .catch(function (error) {
                    console.log(error);
                    toast.error(error.message, { id: 'order-error' });
                });
            e.target.reset();
        }
        else {
            toast.error('Please select your rating.', { id: 'rate-error' });
        }
    }
    return (
        <div>
            <h1 className='text-3xl font-bold my-10 italic mx-auto text-gray-700 max-w-4xl'>Add a feedback :</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text ml-8">Enter Your feedback with Ratings</span>
                    </label>
                    <div className="rating mx-auto mt-2 mb-5">
                        <input onClick={() => setRated(1)} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input onClick={() => setRated(2)} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input onClick={() => setRated(3)} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input onClick={() => setRated(4)} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input onClick={() => setRated(5)} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>

                    <textarea {...register("feedback", { required: true })} type="text" placeholder="Enter Your Feedback" className="text-center input input-bordered w-3/4 mx-auto md:w-full md:max-w-xs mb-3" />
                    {errors.feedback?.type === 'required' && <p className='text-sm text-red-500 mb-1'>Feedback is required</p>}
                </div>
                <input className="btn btn-primary mt-3" type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;