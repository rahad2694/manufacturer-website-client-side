import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-3xl font-bold my-3 italic mx-auto text-gray-700 max-w-4xl'>Dashboard</h1>
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to="/dashboard/myprofile" className={({ isActive }) => (isActive ? 'text-red-500' : '')}>My Profile</NavLink></li>
                        <li><NavLink to="/dashboard/myorders" className={({ isActive }) => (isActive ? 'text-red-500' : '')}>My Orders</NavLink></li>
                        <li><NavLink to="/dashboard/addreview" className={({ isActive }) => (isActive ? 'text-red-500' : '')}>Add a Review</NavLink></li>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;