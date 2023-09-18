import React from 'react';
import CEO from '../assets/img/CEO.jpg';
const AboutMe = () => {
  return (
    <section className='bg-gray-100 py-20 md:py-24' id='about-me'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='order-2 '>
            <img
              src={CEO}
              alt='Ceo'
              className='w-full rounded-lg border-4 border-brownish-gold shadow-xl'
            />
          </div>
          <div className='order-1 text-left'>
            <h2 className='text-4xl font-bold text-gray-800 mb-6'>About Us</h2>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Hello, I'm{' '}
              <span className='text-accent font-semibold'>[Your Name]</span>,
              the proud owner of{' '}
              <span className='text-accent font-semibold'>
                [Your Furniture Shop Name]
              </span>
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
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
