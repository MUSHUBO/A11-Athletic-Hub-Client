import React from 'react';
import { Link, NavLink } from 'react-router';
import "./navLinks.css"
import navLogo from '../../assets/fav-icon.png'
import avatar from '../../assets/profile-avatar.png'

const Navbar = () => {

    const links = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"}>
            Home
        </NavLink>
        <NavLink to="/events" className={({ isActive }) => isActive ? "link active" : "link"}>
            Events
        </NavLink>
        <NavLink to="/create-event" className={({ isActive }) => isActive ? "link active" : "link"}>
            Create Event
        </NavLink>
        <NavLink to="/myBookings" className={({ isActive }) => isActive ? "link active" : "link"}>
            My Bookings
        </NavLink>
    </>

    return (
        <div className="navbar w-11/12 mx-auto p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex gap-1.5 items-center'>
                    <img className='w-8 h-8' src={navLogo} alt="" />
                    <div className='font-bold'>
                        <h1 className='text-purple-700'>Athletic</h1>
                        <h1 className='text-purple-700'>Hub</h1>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-5">
                <img className='w-11 h-11' src={avatar} alt="" />
                <Link to="/auth/login">
                    <button className='btn btn-outline btn-primary'>LogIn</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;