import React from 'react';

// import components
// import Hero from './components/Hero';
// import Features from './components/Features';
// import NewItems from './components/NewItems';
// import FeaturesSecond from './components/FeaturesSecond';
// import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/AboutPage';
import Home from './components/home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          {/* <Hero /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
          {/* <About /> */}
          {/* <Features />
          <NewItems />
          <FeaturesSecond />

          <Testimonial /> */}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
