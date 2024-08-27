import React from 'react';

// Import images
import img1 from '../assets/img/IMG_6450 (1).jpeg';
import img2 from '../assets/img/IMG_6452.jpeg';
import img3 from '../assets/img/IMG_6451 (1).jpeg';
import img4 from '../assets/img/IMG_6455.jpeg';
import img5 from '../assets/img/IMG_6456.jpeg';
import img6 from '../assets/img/IMG_6458.jpeg';
import img7 from '../assets/img/IMG_6459.jpeg';
import img8 from '../assets/img/IMG_6457.jpeg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const ImageGallery = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6'>
        {images.map((src, index) => (
          <div
            key={index}
            className='overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-slide-up'
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className='w-full h-full object-cover transition-opacity duration-500 opacity-80 hover:opacity-100'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
