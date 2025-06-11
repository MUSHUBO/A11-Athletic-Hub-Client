import React from 'react';
import { useLoaderData } from 'react-router';
import SingleEvent from './SingleEvent';

const AllEvents = () => {
    const allEventsData = useLoaderData();

    return (
        <div className='my-10 w-10/11 sm:w-full mx-auto'>
            <h1 className='text-4xl font-bold text-center'>All <span className='text-purple-700'>Events </span>Is Here</h1>
            <p className='text-gray-600 text-center mt-2 mb-10'>There is available all the events</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    allEventsData.map(event => <SingleEvent
                        key={event._id}
                        event={event}
                    ></SingleEvent>)
                }
            </div>

        </div>
    );
};

export default AllEvents;