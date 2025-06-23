import React from 'react';
import { Link } from 'react-router';

const SingleEvent = ({ event }) => {
    const { _id, image, eventName, eventDate, description } = event;

    return (
        <div className="card bg-base-100 mb-10 md:mb-0 border-b-2 border-l border-purple-300 shadow-lg hover:shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Events"
                    className='w-full h-full sm:h-57 object-cover'
                />
            </figure>
            <div className="card-body">
                <div>
                    <h2 className="card-title">{eventName}</h2>
                    <p>{eventDate}</p>
                </div>

                <p className='overflow-hidden'>{description}</p>

                <div className="card-actions justify-end">
                    <Link to={`/event/${_id}`}>
                        <button className="font-medium hover:text-purple-700">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;