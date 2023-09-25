import React, { useState, useEffect } from 'react';
import Logo from '../assets/img/Logoz.png';
import { navigation } from '../data';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import NavMobile from './NavMobile';

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(true); // Change the initial state to true

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-white py-4 lg:py-6' : 'bg-none'
      } fixed left-0 w-full py-8 z-10 transition-all duration -300`}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a
            href='https://instagram.com/woodpentryltd?igshid=MzRIODBiNWFIZA=='
            className='text-center'
          >
            <img
              className='h-10 w-28 lg:h-10 lg:w-28 mx-auto md:mx-0 font-extrabold'
              src={Logo}
              alt=''
            />
          </a>
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className='text-2xl text-accent md:hidden lg:text-3xl cursor-pointer'
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
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
          <div
            className={`${
              mobileNav ? 'left-0' : '-left-full'
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all bg-white z-20`} // Adjusted z-index
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
