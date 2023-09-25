import React from 'react';
import { features } from '../data';

const FeaturesSecond = () => {
  const { title, subtitle, image } = features.feature2;

  return (
    <section className='bg-gray-100 py-8 md:py-24'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='order-2 px-2'>
            <img
              src={image.type}
              alt='Feature'
              className='w-full rounded-lg border-4 border-brownish-gold shadow-xl'
            />
          </div>
          <div className='order-1 text-left'>
            <h2 className='md:text-3xl text-xl font-semibold mb-2 lg:mb-4 text-primary'>
              {title}
            </h2>
            <p className='text-gray-600 '>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
