import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const TopNav = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
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
                </ul>
            </div>
            <div className="navbar-end">
                {user?.uid? <button onClick={() => {
                            signOut(auth);
                            toast.success('Successfully Logged Out', { id: 'logout' });
                        }} className="btn btn-sm">Logout</button>: <Link to="/login" className="btn btn-sm">Login</Link>}
            </div>
        </div>
    );
};

export default TopNav;