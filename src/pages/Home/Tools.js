import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Spinners from '../shared/Spinners';
import Tool from './Tool';


const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        async function getItems() {
            try {
                const response = await axios.get('https://tools-manufacturer-allumin.herokuapp.com/tools');
                setTools(response.data);
            }
            catch (error) {
                // console.log(error);
                toast.error(error.message, { id: 'error-message' })
            }
        }
        getItems();
    }, [tools]);

    if (tools.length === 0) {
        return <Spinners></Spinners>
    }
    return (
        <div className='my-12 lg:mx-12 md:mx-8 mx-5'>
            <div className='p-4 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    tools?.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
            <Link className='btn mb-5 mt-10 text-white' to="/items">See More Items</Link>
        </div>
    );
};

export default Tools;