import React from 'react';
import { useLoaderData } from 'react-router';

const AllEvents = () => {
    const allEventsData = useLoaderData();
    console.log(allEventsData);
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center'>All <span className='text-purple-700'>Events </span>Is Here</h1>
            <p className='text-gray-600 text-center mt-2 mb-10'>There is available all the events</p>

            {
                
            }
            
        </div>
    );
};

export default AllEvents;