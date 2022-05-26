import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const TopNav = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/developer">My Portfolio</Link></li>
                        {user?.uid && <li><Link to="/dashboard">Dashboard</Link></li>}
                        <li><Link to='/profile'>{user?.displayName}</Link></li>
                    </ul>
                </div>
                <div className="avatar ml-4">
                    <div className="w-16 mask mask-hexagon">
                        <Link to="/"><img alt='' src="https://i.ibb.co/9WFKHbZ/logo.png" /></Link>
                    </div>
                </div>
                <Link to="/" className="lg:text-3xl md:text-2xl text-xl font-bold ml-2 font-title">Allumin Apparatus</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/developer">My Portfolio</Link></li>
                    {user?.uid && <li><Link to="/dashboard">Dashboard</Link></li>}
                </ul>
            </div>
            <div className="navbar-end mr-3">
                {user?.uid && <div className="navbar-center hidden lg:flex mr-3">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/profile'>{user?.displayName}</Link></li>
                    </ul>
                </div>}
                {user?.uid ? <button onClick={() => {
                    signOut(auth);
                    toast.success('Successfully Logged Out', { id: 'logout' });
                }} className="btn btn-sm text-white">Logout</button> : <Link to="/login" className="btn btn-sm text-white">Login</Link>}

                {user?.uid && <label htmlFor="my-drawer-2" className="btn btn-sm text-white drawer-button lg:hidden ml-3"><p className='text-lg'><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></p></label>}
            </div>
        </div>
    );
};

export default TopNav;