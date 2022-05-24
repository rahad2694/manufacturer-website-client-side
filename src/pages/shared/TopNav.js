import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div class="avatar ml-4">
                    <div class="w-16 mask mask-hexagon">
                        <Link to="/"><img alt='' src="https://i.ibb.co/9WFKHbZ/logo.png" /></Link>
                    </div>
                </div>
                <Link to="/" class="lg:text-3xl md:text-2xl text-xl font-bold ml-2 font-title">Allumin Apparatus</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">About</Link></li>
                </ul>
            </div>
            <div class="navbar-end">
                <Link to="/login" class="btn">Login</Link>
            </div>
        </div>
    );
};

export default TopNav;