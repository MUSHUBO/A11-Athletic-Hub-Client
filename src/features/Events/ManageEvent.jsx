import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ManageEvent = ({event, index}) => {
    const {image, eventName, eventDate, location, eventType} = event;

    const handleUpdate = () => {

    };

    const handleDelete = () => {
        
    }

    return (
        <tr key={event._id}>
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
            <td className="flex gap-2 justify-center">
                <button
                    onClick={() => handleUpdate(event._id)}
                    className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
                >
                    <FaEdit /> Update
                </button>
                <button
                    onClick={() => handleDelete(event._id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                >
                    <FaTrashAlt /> Delete
                </button>
            </td>
        </tr>
    );
};

export default ManageEvent;