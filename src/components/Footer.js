import React from 'react';
import Logo from '../assets/img/LOGOTP.png';
import { footer } from '../data';

const Footer = () => {
  return (
    <footer id='footer' className='bg-gray-100 text-black py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-center items-center border-b border-opacity-75 border-gray-700 pb-4 lg:pb-8 mb-8'>
          <a
            href='https://instagram.com/woodpentryltd?igshid=MzRIODBiNWFIZA=='
            className='text-center'
          >
            <img src={Logo} alt='logo' className='w-32 h-24 mt-1' />
          </a>

          <div className='flex flex-row gap-4 mt-1 lg:mt-0'>
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
              href='mailto:info@woodpentry.org'
              className='text-accent hover:text-white'
            >
              info@woodpentry.org
            </a>
          </p>
          <p>
            Call us <span className='text-accent'>08146546391</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
