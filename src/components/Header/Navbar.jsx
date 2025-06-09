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
            Create event
        </NavLink>
        <NavLink to="/book-event" className={({ isActive }) => isActive ? "link active" : "link"}>
            Book event
        </NavLink>
        <NavLink to="/myBookings" className={({ isActive }) => isActive ? "link active" : "link"}>
            My bookings
        </NavLink>
    </>

    return (
        <div className="navbar w-11/12 mx-auto p-4">
            <div className="navbar-start">
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
                {/* avatar dropdown section */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={avatar} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-6 w-52 p-2 shadow">
                        <li>
                            {links}
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>

                {/* login logOut button */}
                <Link to="/auth/login">
                    <button className='btn btn-outline btn-primary'>LogIn</button>
                </Link>
            </div>
        </div >
    );
};

export default Navbar;