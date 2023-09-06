import React, { useEffect } from 'react';
import { stats } from '../data';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.3 },
    },
  };

  return (
    <div className='bg-accent rounded-[20px] p-12' ref={ref}>
      <div className='flex flex-wrap gap-y-8'>
        {stats.map((item, index) => {
          return (
            <motion.div
              className='min-h-[70px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:even:last:border-none'
              key={index}
              initial='hidden'
              animate={controls}
              variants={itemVariants}
            >
              <motion.div
                className='text-2xl font-semibold lg:text-4xl'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                }}
              >
                {item.value}
              </motion.div>
              <motion.div
                className='text-base font-light max-w-[110px] mx-auto lg:text-xl'
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              >
                {item.text}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
