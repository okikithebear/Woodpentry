import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper';

import { testimonial } from '../data';

const TestimonialSlider = () => {
  return (
    <Swiper
      className='testimonialSlider'
      modules={[Navigation, Autoplay]}
      navigation={true}
      autoplay={true}
    >
      {testimonial.persons.map((person, index) => {
        const { avatar, name, message } = person;
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col min-h-[250px]'>
              <div className='flex items-center gap-x-5 mb-9'>
                <img src={avatar.type} alt='' />
                <div>
                  <div className='text-xl font-semibold'>{name}</div>
                </div>
                <div className='text-xl max-w-[570px]'>{message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
