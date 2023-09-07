import React from 'react';
import { hero } from '../data';
import Stats from '../components/Stats';
import { motion } from 'framer-motion';

const Hero = () => {
  const { title, subtitle, buttonText } = hero;

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
  };

  return (
    <motion.section
      className='h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <div className='container mx-auto text-center'>
        <motion.h1
          className='text-2xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight lg-max-w-[888px]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          {title}
        </motion.h1>
        <motion.h2
          className='mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl'
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          {subtitle}
        </motion.h2>
        <motion.button
          className='bg-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px]'
          variants={buttonVariants}
          whileHover='hover'
        >
          <a href='https://instagram.com/woodpentryltd?igshid=MzRIODBiNWFIZA=='>
            {' '}
            {buttonText}
          </a>
        </motion.button>
        <div>
          <Stats />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
