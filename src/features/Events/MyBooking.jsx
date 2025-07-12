import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const MyBooking = ({ booking, index }) => {
    const {image, eventName, eventDate, location, eventType} = booking;

    return (
        <tr key={booking._id}>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt={eventName} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{eventName}</div>
                    </div>
                </div>
            </td>
            <td>{eventDate}</td>
            <td>{location}</td>
            <td>{eventType}</td>
            <td>
                <button
                    // onClick={() => handleDelete(booking._id)}
                    className="btn btn-error btn-xs text-white"
                >
                    <FaTrashAlt className="inline-block mr-1" />
                    Cancel
                </button>
            </td>
        </tr>
    );
};

export default MyBooking;