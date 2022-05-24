import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinners from '../../shared/Spinners';

const Purchase = () => {
    const { id } = useParams();
    const { isLoading, error, data: itemInfo } = useQuery('toolsData', () =>
        fetch(`https://tools-manufacturer-allumin.herokuapp.com/item/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Spinners></Spinners>
    }
    if (error) {
        console.log(error);
        toast.error(error.message, { id: 'load-error' })
    }
    const {_id, available, description, img, moq, price, title } = itemInfo;

    console.log(itemInfo);
    // console.log(id);
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className='shadow-lg lg:hover:scale-110 transition ease-in-out delay-300'><img src={img} alt='' className="max-w-sm rounded-lg shadow-2xl"/></div>
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;