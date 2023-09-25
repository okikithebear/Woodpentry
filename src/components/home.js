import React from 'react';
import Hero from './Hero';
import Features from './Features';
import NewItems from './NewItems';
import FeaturesSecond from './FeaturesSecond';
import Testimonial from './Testimonial';

function home() {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-white'>
      <Hero />

      <Features />
      <NewItems />
      <FeaturesSecond />

      <Testimonial />
    </div>
  );
}

export default home;
