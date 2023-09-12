import React from 'react';
import { newInStore } from '../data';

const NewItemsGrid = () => {
  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-40'>
        {newInStore.products.map((product, index) => (
          <div key={index} className='relative'>
            <div className='aspect-w-1 aspect-h-1'>
              <img
                src={product.image.type}
                alt={product.name}
                className='object-cover w-full h-full' // Maintain square shape
              />
            </div>
            <div className='absolute text-white bottom-2 left-2 right-2 text-center text-[18px] lg:text-2xl font-medium capitalize'>
              {product.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewItemsGrid;
