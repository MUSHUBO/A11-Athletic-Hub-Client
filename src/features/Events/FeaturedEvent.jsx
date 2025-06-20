import React from 'react';
import { Link } from 'react-router';

const FeaturedEvent = ({ event }) => {
    const { _id, eventName,  eventDate} = event;

    return (
        <div className="card bg-base-100 mb-10 md:mb-0 border-b-2 border-l border-t border-cyan-600 shadow-md hover:shadow-lg">

            <div className="card-body">
                <h2 className="card-title font-bold text-2xl text-cyan-600">{eventName}</h2>

                <p className='font-medium'>{eventDate}</p>

                <div className="card-actions justify-end">
                    <Link to={`/event/${_id}`}>
                        <button className="font-medium hover:text-cyan-700">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedEvent;