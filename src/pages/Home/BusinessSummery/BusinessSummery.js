import { faMoneyBillTrendUp, faPeopleGroup, faTruckFast, faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessSummery = () => {
    return (
        <div className='mb-20 mt-5 border-2 rounded-lg lg:mx-12 md:mx-8 mx-5 pb-10'>
            <h1 className='text-3xl font-bold my-10 italic mx-auto text-gray-700 max-w-4xl'><span title='Allumin Apparatus' className='font-title text-5xl text-orange-500'>A-A</span> at a Glance:</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-10 lg:pt-10'>
                <div>
                    <p className='text-8xl mb-3'><FontAwesomeIcon icon={faTruckFast} /></p>
                    <p>30,000</p>
                    <p>Deliveries/Year</p>
                </div>
                <div>
                    <p className='text-8xl mb-3'><FontAwesomeIcon icon={faMoneyBillTrendUp} /></p>
                    <p>$90,000</p>
                    <p>Yearly Turnover</p>
                </div>
                <div>
                    <p className='text-8xl mb-3'><FontAwesomeIcon icon={faUsersGear} /></p>
                    <p>50,000</p>
                    <p>Happy Customers</p>
                </div>
                <div>
                    <p className='text-8xl mb-3'><FontAwesomeIcon icon={faPeopleGroup} /></p>
                    <p>1,000</p>
                    <p>Expert personnel's</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;