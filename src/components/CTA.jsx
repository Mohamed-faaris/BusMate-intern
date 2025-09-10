import React from 'react';
import '../index.css';
import { Button, Box, Typography } from '@mui/material';

const CTA = () => {
  return (
    <section className="py-20 px-6 hero-gradient">
      <div className="container mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Simplify Your Commute?</h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">Join thousands of students and commuters who are already enjoying stress-free transportation.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#" className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full hover:bg-gray-100 transition btn-hover ripple">Get Started Now</a>
          <a href="#" className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:bg-opacity-10 transition btn-hover ripple">See Live Demo</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
