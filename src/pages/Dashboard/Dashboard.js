import React from 'react';
import toast from 'react-hot-toast';
import { NavLink, Outlet } from 'react-router-dom';
import UseGetUser from '../../hooks/UseGetUser';
import Spinners from '../shared/Spinners';

const Dashboard = () => {
    const [userInfo, isLoading, error] = UseGetUser();
    if(isLoading){
        return <Spinners></Spinners>
    }
    if(error){
        toast.error(error.message,{id:'load-error'});
        return;
    }
    // console.log(userInfo);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-3xl font-bold my-3 italic mx-auto text-gray-700 max-w-4xl'>Dashboard{(userInfo?.role==='admin')?<span className='text-green-500 text-xl'> (Admin)</span>:''}</h1>
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className={`menu p-4 overflow-y-auto bg-base-100 text-base-content ${(userInfo?.role==='admin')?'w-52':'w-48'}`}>
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to="/dashboard/myprofile" className={({ isActive }) => (isActive ? 'text-red-500' : '')}>My Profile</NavLink></li>
                        {(!userInfo?.role || !userInfo?.role==='admin') && <li><NavLink to="/dashboard/myorders" className={({ isActive }) => (isActive ? 'text-red-500' : '')}>My Orders</NavLink></li>}
                        {(!userInfo?.role || !userInfo?.role==='admin') &&<li><NavLink to="/dashboard/addreview" className={({ isActive }) => (isActive ? 'text-red-500' : '')}>Add a Review</NavLink></li>}

                        {(userInfo?.role==='admin') &&<li><NavLink to="/dashboard/addreview" className={({ isActive }) => (isActive ? 'text-red-500' : '')}>Manage Orders</NavLink></li>}

                        {(userInfo?.role==='admin') &&<li><NavLink to="/dashboard/addreview" className={({ isActive }) => (isActive ? 'text-red-500' : '')}>Manage Users</NavLink></li>}

                        {(userInfo?.role==='admin') &&<li><NavLink to="/dashboard/manageproducts" className={({ isActive }) => (isActive ? 'text-red-500' : '')}>Manage Products</NavLink></li>}

                        {(userInfo?.role==='admin') &&<li><NavLink to="/dashboard/addproduct" className={({ isActive }) => (isActive ? 'text-red-500' : '')}>Add Product</NavLink></li>}
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;