import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';

const EventDetails = () => {
    const eventData = useLoaderData();
    const { _id, image, eventName, eventDate, location, eventType, description } = eventData;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='lg:w-2/4 mx-auto my-10'>
            <div className="card bg-base-100 mb-10 md:mb-0 border-b-2 border-l border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-200">
                <figure>
                    <img
                        src={image}
                        alt="Events"
                        className='w-full h-full object-cover'
                    />
                </figure>
                <div className="card-body">
                    <div className='flex flex-col md:flex-row items-start md:items-center space-y-4'>
                        <h3 className="card-title font-bold text-3xl">{eventName}</h3>
                        <p className='font-medium flex justify-start md:justify-end'>{eventDate}</p>
                    </div>

                    <div className='flex flex-col md:flex-row font-medium text-lg space-y-2'>
                        <h3 className=''>{location}</h3>
                        <p className='flex justify-start md:justify-end'>{eventType}</p>
                    </div>

                    <h3 className='text-lg'>{description}</h3>

                </div>
            </div>
        </div>
    );
};

export default EventDetails;