import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import "./navLinks.css"
import navLogo from '../../assets/fav-icon.png'
import avatar from '../../assets/profile-avatar.png'
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Logout successful");
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
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
                        <li>
                            <NavLink to="/myBookings">My Bookings</NavLink>
                        </li>
                        {user?.role === 'organizer' && (
                            <li>
                                <NavLink to="/manage-events">Manage Events</NavLink>
                            </li>
                        )}
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