import React from 'react';
import '../index.css';

const Hero = () => {
  return (
    <section className="hero-gradient pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Book Your Bus Seat With Ease</h1>
            <p className="text-xl text-indigo-100 mb-8">BusMate makes campus and route transportation simple, efficient, and enjoyable for everyone.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full text-center hover:bg-gray-100 transition btn-hover ripple">Get Started</a>
              <a href="#" className="px-8 py-4 border-2 border-white text-white font-bold rounded-full text-center hover:bg-white hover:bg-opacity-10 transition btn-hover ripple">Watch Demo</a>
            </div>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <div className="relative bus-animation">
              <img src="http://static.photos/transportation/1024x576/1" alt="Bus" className="rounded-xl shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex space-x-2">
                  <div className="seat w-8 h-8 bg-green-200 rounded flex items-center justify-center cursor-pointer">
                    <i data-feather="user"></i>
                  </div>
                  <div className="seat w-8 h-8 bg-green-200 rounded flex items-center justify-center cursor-pointer">
                    <i data-feather="user"></i>
                  </div>
                  <div className="seat w-8 h-8 bg-gray-200 rounded flex items-center justify-center cursor-pointer">
                    <i data-feather="user"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
