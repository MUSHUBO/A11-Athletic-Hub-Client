import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import MyBooking from './MyBooking';
import { ToastContainer } from 'react-toastify';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/bookings?email=${user.email}`)
                .then(res => setBookings(res.data))
                .catch(err => console.error(err));
        }
    }, [user]);

    return (
        <div className='max-w-6xl mx-auto p-4 mb-16'>
            <h2 className="text-4xl font-bold text-center my-8">🎟️ My Bookings</h2>

            {bookings.length === 0 ? (
                <p className="text-center text-gray-500">You have no bookings yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table table-zebra border border-base-300">
                        <thead className="bg-purple-100 text-purple-800">
                            <tr>
                                <th>#</th>
                                <th>Event</th>
                                <th>Date</th>
                                <th>Location</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, index) =>
                                <MyBooking
                                    key={booking._id}
                                    index={index}
                                    booking={booking}
                                    onDeleteSuccess={(deletedId) => {
                                        setBookings(prev => prev.filter(b => b._id !== deletedId));
                                    }}
                                ></MyBooking>)}
                        </tbody>
                    </table>
                </div>
            )}
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default MyBookings;