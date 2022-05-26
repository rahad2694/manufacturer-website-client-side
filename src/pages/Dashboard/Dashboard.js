import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-3xl font-bold my-3 italic mx-auto text-gray-700 max-w-4xl'>Welcome to Dashboard</h1>
                    <Outlet />

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-40 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to="/dashboard/myprofile" className={({ isActive }) => (isActive ? 'text-red-500' : '')}>Profile</NavLink></li>
                        <li><NavLink to="/dashboard/myorders" className={({ isActive }) => (isActive ? 'text-red-500' : '')}>Orders</NavLink></li>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;