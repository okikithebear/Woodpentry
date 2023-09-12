import React, { useState, useEffect } from 'react';
import { newInStore } from '../data';
import NewItemSlider from './NewItemsSlider';
import MobileItemsSlider from './MobileItemsSlider';

const NewItems = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Update the screen width when the component mounts
    setWidth(window.innerWidth);
  }, []);

  return (
    <section id='features' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0'>
            <h2 className='title max-w-[245px]  lg:mt-[10px] lg:mb-[90px] lg:mx-0 md:mx-40'>
              {newInStore.title}
            </h2>
            <p className='max-w-[245px] lg:mb-36 lg:mx-0 md:mx-40'>
              {newInStore.subtitle}
            </p>
            <div className='hidden lg:flex items-center'>
              <a
                className='hover:border-b border-accent lg:items-center font-medium transition-all'
                href='https://instagram.com/woodpentryltd?igshid=MzRIODBiNWFIZA=='
              >
                {newInStore.link}
              </a>
              <div className='text-3xl'>{newInStore.icon}</div>
            </div>
          </div>
          <div className='lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24'></div>
          {width <= 768 ? <MobileItemsSlider /> : <NewItemSlider />}
        </div>
      </div>
    </section>
  );
};

export default NewItems;
