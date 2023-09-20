import React, { useState, useEffect } from 'react';
import Logo from '../assets/img/LOGOTP.png';
import { navigation } from '../data';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-white py-4 lg:py-6' : 'bg-none'
      } fixed left-0 w-96 py-2 z-10 transition-all duration-300`}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a
            href='https://instagram.com/woodpentryltd?igshid=MzRIODBiNWFIZA=='
            className='text-center'
          >
            <img
              className='h-24 w-32 lg:h-28 lg:w-48 mx-auto md:mx-0 font-extrabold'
              src={Logo}
              alt=''
            />
          </a>
          <nav className='hidden md:flex'>
            <ul className='md:flex md:gap-x-12'>
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className='capitalize text-accent hover:border-b transition-all '
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
