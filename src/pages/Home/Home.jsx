import React from 'react';
import Banner from '../../components/Banner/Banner';
import FeaturedEvents from '../../features/Events/FeaturedEvents';
import { useLoaderData } from 'react-router';

const Home = () => {
    const eventsData = useLoaderData();

    return (
        <div>
            <section className='Banner'>
                <Banner></Banner>
            </section>
            <section className='Events'>
                <FeaturedEvents eventsData={eventsData}></FeaturedEvents>
            </section>
            <section className='section-01'>

            </section>
            <section className='section-02'>

            </section>
        </div>
    );
};

export default Home;