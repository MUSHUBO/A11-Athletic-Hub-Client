import React from 'react';
import { Link } from 'react-router';

const FeaturedEvents = () => {
    return (
        <div className='my-32'>
            <h1 className='text-4xl font-bold text-center'><span className='text-cyan-600'>Featured</span> Events</h1>
            <p className='text-gray-600 text-center mt-2 mb-10'>There is Featured 6 Events by date available</p>


            {/* button */}
            <div className='text-center mt-16'>
                <Link to="/allEvents">
                    <button className='btn btn-outline px-20 btn-primary'>See All Events</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedEvents;