import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import CEO from '../assets/img/CEO.jpg';

const AboutPage = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }, // Adjust animation properties as needed
  };

  return (
    <motion.section
      className='bg-white py-20 md:py-24'
      id='about-me'
      initial='hidden' // Set initial animation state
      animate='visible' // Set animate animation state
      variants={containerVariants} // Apply variants
    >
      <div className='container mx-auto lg:mx-24 lg:mt-10 mt-8 px-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-28 lg:gap-44 items-center'>
          <div className='md:col-span-1'>
            <h2 className='text-4xl font-bold text-gray-800 mb-2'>About Us</h2>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Hello, I'm{' '}
              <span className='text-accent font-semibold'>Ighenumah Joel</span>,
              the proud owner of{' '}
              <span className='text-accent font-semibold'>Woodpentry</span>
              .
              <br />
              <br />
              With a deep passion for craftsmanship and an unwavering love for
              creating stunning furniture pieces, I've had the privilege of
              serving our community for over{' '}
              <span className='text-accent font-semibold'>[X years]</span>.
              <br />
              <br />
              Our mission is simple: to provide you with meticulously
              handcrafted, high-quality furniture that not only beautifies your
              home but also infuses it with warmth and elegance.
              <br />
              <br />
              Thank you for choosing us to be a part of your home's story.
            </p>
          </div>
          <div className='md:col-span-1 mx-10'>
            <motion.img
              src={CEO}
              alt='Ceo'
              className='w-full rounded-full border-4 border-brownish-gold shadow-xl'
              style={{ maxWidth: '300px', height: 'auto' }}
              initial={{ opacity: 0, scale: 0.5 }} // Set initial image properties
              animate={{ opacity: 1, scale: 1 }} // Set animate image properties
              transition={{ duration: 0.5, delay: 0.5 }} // Set image transition properties
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
