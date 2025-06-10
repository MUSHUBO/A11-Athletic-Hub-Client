import React from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import card1 from '../../assets/slider/card-01.png'
import card2 from '../../assets/slider/card-02.png'
import card3 from '../../assets/slider/card-03.png'
import card4 from '../../assets/slider/card-04.png'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <div className='text-center font-medium py-3'>
            <Swiper
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="rounded-xl cursor-pointer overflow-hidden shadow-lg"
            >

                <SwiperSlide>
                    <img className='max-h-[83vh] w-full mx-auto' src={card1} alt="Banner 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='max-h-[83vh] w-full mx-auto' src={card2} alt="Banner 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='max-h-[83vh] w-full mx-auto' src={card3} alt="Banner 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='max-h-[83vh] w-full mx-auto' src={card4} alt="Banner 1" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;