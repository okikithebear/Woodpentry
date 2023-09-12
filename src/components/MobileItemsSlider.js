import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { newInStore } from '../data';
import NewItemsGrid from './NewItemsSlider';

const MobileNewItemsSlider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <Swiper
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            834: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {newInStore.products.map((product, index) => {
            return (
              <SwiperSlide className='max-w-[265px]' key={index}>
                <div className='relative'>
                  <img src={product.image.type} alt='' className='max-w-full' />
                  <div className='absolute text-white bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium capitalize'>
                    {product.name}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <NewItemsGrid /> // Render the NewItemsSlider component when it's not mobile
      )}
    </div>
  );
};

export default MobileNewItemsSlider;
