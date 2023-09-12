import React from 'react';
import Logo from '../assets/img/LOGOTP.png';
import { footer } from '../data';

const Footer = () => {
  return (
    <footer id='footer' className='bg-primary text-white py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center border-b border-opacity-75 border-gray-700 pb-4 lg:pb-8 mb-8'>
          <a href='https://instagram.com/woodpentryltd?igshid=MzRIODBiNWFIZA=='>
            {/* <h4 className='capitalize font-bold lg:text-xl'>Woodpentry</h4> */}
            <img src={Logo} alt='logo' className='w-36 h-20 mt-4' />
          </a>

          <div className='flex flex-row gap-4 mt-4 lg:mt-0'>
            {footer.social.map((item, index) => (
              <a
                href={item.href}
                className='w-12 h-12 flex justify-center items-center rounded-full hover:bg-accent hover:text-white transition duration-300'
                key={index}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className='text-center'>
          <p className='mb-2'>&copy; WoodPentry 2023 - All rights reserved.</p>
          <p>
            Contact us at{' '}
            <a
              href='mailto:your.email@gmail.com'
              className='text-accent hover:text-white'
            >
              your.email@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
