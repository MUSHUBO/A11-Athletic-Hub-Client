import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import "./navLinks.css"
import navLogo from '../../assets/fav-icon.png'
import avatar from '../../assets/profile-avatar.png'
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const handleLogout = async () => {

        const result = await Swal.fire({
            title: "Are you sure you want to log-out?",
            text: "Log out of Athletic Hub?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log Out!"
        })

        if (result.isConfirmed) {
            logOut()
                .then(() => {
                    Swal.fire({
                        title: "Logged Out!",
                        text: "You have been logged out successfully.",
                        icon: "success"
                    });
                })
                .catch((error) => {
                    console.error("Logout error:", error);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong while logging out!"
                    });
                });
        }
    };

    const links = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"}>
            Home
        </NavLink>
        <NavLink to="/allEvents" className={({ isActive }) => isActive ? "link active" : "link"}>
            All Events
        </NavLink>
        <NavLink to="/create-event" className={({ isActive }) => isActive ? "link active" : "link"}>
            Create event
        </NavLink>
    </>

    return (
        <div className="navbar w-11/12 mx-auto p-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-8 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex gap-1.5 items-center ml-2'>
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

            <div className="navbar-end flex items-center gap-5">
                {/* Light/Dark Mode Toggle */}
                <button
                    onClick={toggleTheme}
                    className="btn btn-square btn-ghost tooltip tooltip-bottom"
                    data-tip={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                    aria-label="Toggle Dark Mode"
                >
                    {theme === 'light' ? (
                        // Moon icon for dark mode
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                        </svg>
                    ) : (
                        // Sun icon for light mode
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.485-9h1M3.515 12h1m12.02-6.364l.707.707M6.343 17.657l.707.707m12.02 0l-.707.707M6.343 6.343l-.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
                        </svg>
                    )}
                </button>

                <div className="dropdown dropdown-end">
                    {/* Profile Image and Name */}
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user?.displayName || "Guest"}>
                        <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL || avatar} alt="Profile" />
                        </div>
                    </div>

                    {/* Dropdown content */}
                    <ul tabIndex={0} className="mt-6 -mr-28 xl:-mr-36 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink to="/book-event">Book Event</NavLink>
                        </li>
                        {
                            user && <>
                                <li>
                                    <NavLink to="/my-bookings">My Bookings</NavLink>
                                </li>
                            </>
                        }

                        {
                            // user?.role === 'organizer' && (
                            //     <li>
                            //         <NavLink to="/manage-events">Manage Events</NavLink>
                            //     </li>
                            // )
                            user && (
                                <li>
                                    <NavLink to="/manageEvents">Manage Events</NavLink>
                                </li>
                            )
                        }
                    </ul>
                </div>

                {/* Login or Logout */}
                {
                    user ? (
                        <button onClick={handleLogout} className="btn btn-outline hover:btn-error">
                            Logout
                        </button>
                    ) : (
                        <Link to="/auth/login" className="btn btn-primary">
                            Login
                        </Link>
                    )
                }

            </div>
        </div >
    );
};

export default Navbar;