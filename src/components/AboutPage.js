import React from 'react';
import { motion } from 'framer-motion';
import CEO from '../assets/img/CEO.jpg';
import DesignerImage from '../assets/img/designer.jpg';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };
  const headshotStyle = {
    maxWidth: '200px', // Adjust the width as needed
    height: 'auto',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return (
    <motion.section
      className='bg-white py-20 md:py-24'
      id='about-me'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <div className='container mx-auto lg:mx-24 lg:mt-10 mt-8 px-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-44 items-center'>
          <div className='md:col-span-1'>
            <h2 className='text-4xl font-bold text-gray-800 mb-2'>About Us</h2>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Hello, I'm{' '}
              <span className='text-accent font-semibold'>Ighenumah Joel</span>,
              the Creative director of{' '}
              <span className='text-accent font-semibold'>Woodpentry</span>.
              <br />
              <br />
              With a deep passion for craftsmanship and an unwavering love for
              creating stunning furniture pieces, We have had the privilege of
              serving our community for over{' '}
              <span className='text-accent font-semibold'>5 years</span>.
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
          <div className='md:col-span-1  ml-28'>
            <motion.img
              src={CEO}
              alt='Ceo'
              className='w-full rounded-full border-4 border-brownish-gold shadow-xl'
              style={headshotStyle}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-44 items-center mt-10'>
          <div className='md:col-span-1 ml-2 lg:ml-0 text-center lg:text-start'>
            {/* <h2 className='text-4xl font-bold text-gray-800 mb-2'>
              Our Designer
            </h2> */}
            <p className='text-lg text-gray-700 leading-relaxed'>
              <span className='text-black-500 text-2xl font-semibold'>
                Owolabi Sodiq
              </span>
              <br />
              <span className='text-accent font-semibold'>
                Focused Millennium Concepts
              </span>
              <br />

              <span className='text-accent font-semibold'>Design Partner</span>
            </p>
          </div>
          <div className='md:col-span-1 ml-28 '>
            <motion.img
              src={DesignerImage}
              alt='Designer'
              className='w-full rounded-full border-4 border-brownish-gold shadow-xl'
              style={headshotStyle}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
