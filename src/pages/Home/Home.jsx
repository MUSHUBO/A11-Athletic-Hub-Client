import React from 'react';
import Banner from '../../components/Banner/Banner';
import FeaturedEvents from '../../features/Events/FeaturedEvents';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {

    return (
        <div>
            <section className='Banner'>
                <Banner></Banner>
            </section>
            <section className='Events'>
                <FeaturedEvents></FeaturedEvents>
            </section>
            <section className='section-01'>
                <Testimonials></Testimonials>
            </section>
            <section className='section-02'>

            </section>
        </div>
    );
};

export default Home;