import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import ManageEvent from './ManageEvent';
import axios from 'axios';

const ManageEvents = () => {
    const { user } = useContext(AuthContext);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/myEvents?user_email=${user.email}`)
                .then(res => setEvents(res.data))
                .catch(err => console.error('Failed to fetch events:', err));
        }
    }, [user]);

    return (
        <div className='p-6 max-w-6xl mx-auto'>
            <h2 className="text-4xl font-bold text-center mb-8 text-purple-600">🎯 Manage Your Events</h2>

            <div className="overflow-x-auto rounded-xl shadow border border-base-300">
                <table className="table table-zebra w-full">
                    <thead className="bg-purple-100 text-purple-800">
                        <tr>
                            <th>#</th>
                            <th>Event</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            events.map((event, index) => <ManageEvent
                                event={event}
                                index={index}
                                key={event._id}
                            ></ManageEvent>)
                        }

                        {events.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center py-8 text-gray-500">
                                    😔 You have not created any events yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageEvents;