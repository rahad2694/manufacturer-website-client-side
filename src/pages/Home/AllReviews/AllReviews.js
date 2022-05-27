import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Spinners from '../../shared/Spinners';

const AllReviews = () => {
    const [allRatings, setAllRatings] = useState([]);
    useEffect(() => {
        async function getItems() {
            try {
                const response = await axios.get('http://localhost:5000/allratings');
                setAllRatings(response.data);
            }
            catch (error) {
                toast.error(error.message, { id: 'error-message' })
            }
        }
        getItems();
    }, [allRatings]);

    if (allRatings.length === 0) {
        return <Spinners></Spinners>
    }

    return (
        <div>

            <section className="mb-20 text-gray-700">
                <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
                    <h1 className='text-3xl font-bold my-10 italic mx-auto text-gray-700 max-w-4xl'>All Our Happy Customers</h1>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center mx-12">
                    {
                        allRatings.map(rating => <div key={rating._id} className="mb-12 md:mb-0">
                            <div className="flex justify-center mb-6">
                                <img alt='' src={rating?.photoURL ? rating.photoURL : 'https://previews.123rf.com/images/yupiramos/yupiramos1802/yupiramos180230025/96282371-emoticon-cartoon-face-smiling-happy-character-vector-illustration-sketch-image.jpg'} className="rounded-full shadow-lg w-32" />
                            </div>
                            <h5 className="text-xl font-semibold mb-4">{rating.displayName}</h5>
                            <p className="mb-4">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        fill="currentColor"
                                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                                    ></path>
                                </svg>
                                {rating.feedback}
                            </p>
                            <ul className="flex justify-center mb-0">
                                {rating.rated === 1 && <li className='text-yellow-400 text-lg'><FontAwesomeIcon icon={faStar} /></li>}
                                {rating.rated === 2 && <li className='text-yellow-400 text-lg'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></li>}
                                {rating.rated === 3 && <li className='text-yellow-400 text-lg'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></li>}
                                {rating.rated === 4 && <li className='text-yellow-400 text-lg'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></li>}
                                {rating.rated === 5 && <li className='text-yellow-400 text-lg'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></li>}
                            </ul>
                        </div>)
                    }
                </div>
            </section>
        </div>
    );
};

export default AllReviews;