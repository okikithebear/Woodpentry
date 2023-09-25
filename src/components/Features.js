import React from 'react';
import { features } from '../data';
import { motion } from 'framer-motion';

const Features = () => {
  const { title, subtitle, image, items } = features;

  const brownishGoldIcon = {
    color: '#DAA520', // Use the desired brownish gold color
  };

  // Define animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <section id='about' className='bg-gray-100 py-24 lg:py-10'>
      <div className='container mx-auto '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div>
            <img
              src={image.type}
              alt='Feature'
              className='w-full h-full rounded-lg shadow-xl'
            />
          </div>
          <div className='px-10'>
            <motion.h2
              className='text-3xl font-semibold mb-2 lg:mb-4'
              initial='hidden'
              animate='visible'
              variants={titleVariants}
            >
              {title}
            </motion.h2>
            <motion.p
              className='text-gray-600'
              initial='hidden'
              animate='visible'
              variants={subtitleVariants}
            >
              {subtitle}
            </motion.p>
            <div className='grid grid-cols-1 md:grid-rows-2 gap-4 mt-4'>
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  className='flex items-start'
                  initial='hidden'
                  animate='visible'
                  variants={itemVariants}
                >
                  <div
                    className='text-2xl mr-4 lg:text-3xl'
                    style={brownishGoldIcon}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className='text-base lg:text-xl font-semibold mb-3'>
                      {item.title}
                    </h4>
                    <p className='text-gray-600'>{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
