import React from 'react';
import '../index.css';
import { Button, Box, Typography } from '@mui/material';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose the plan that fits your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-md border border-gray-200" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Basic</h3>
              <p className="text-gray-600 mb-4">Perfect for individual students</p>
              <div className="flex justify-center items-baseline">
                <span className="text-4xl font-bold text-indigo-600">$5</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <i data-feather="check" className="text-green-500 mr-2"></i>
                <span>Up to 10 bookings/month</span>
              </li>
              <li className="flex items-center">
                <i data-feather="check" className="text-green-500 mr-2"></i>
                <span>Route notifications</span>
              </li>
              <li className="flex items-center">
                <i data-feather="check" className="text-green-500 mr-2"></i>
                <span>Basic support</span>
              </li>
            </ul>
            <a href="#" className="block w-full py-3 px-6 text-center bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition btn-hover ripple">Get Started</a>
          </div>
          
          {/* Pro Plan */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-xl border-2 border-indigo-500 transform scale-105" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center mb-6">
              <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-2">Most Popular</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pro</h3>
              <p className="text-gray-600 mb-4">Best for frequent travelers</p>
              <div className="flex justify-center items-baseline">
                <span className="text-4xl font-bold text-indigo-600">$10</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <i data-feather="check" className="text-green-500 mr-2"></i>
                <span>Unlimited bookings</span>
              </li>
              <li className="flex items-center">
                <i data-feather="check" className="text-green-500 mr-2"></i>
                <span>Priority seat selection</span>
              </li>
              <li className="flex items-center">
                <i data-feather="check" className="text-green-500 mr-2"></i>
                <span>Real-time tracking</span>
              </li>
              <li className="flex items-center">
                <i data-feather="check" className="text-green-500 mr-2"></i>
                <span>24/7 support</span>
              </li>
            </ul>
            <a href="#" className="block w-full py-3 px-6 text-center bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition btn-hover ripple">Get Started</a>
          </div>
          
          {/* Campus Plan */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-md border border-gray-200" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Campus</h3>
              <p className="text-gray-600 mb-4">For universities & organizations</p>
              <div className="flex justify-center items-baseline">
                <span className="text-4xl font-bold text-indigo-600">$99</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <i data-feather="check" className="text-green-500 mr-2"></i>
                <span>Unlimited users</span>
              </li>
              <li className="flex items-center">
                <i data-feather="check" className="text-green-500 mr-2"></i>
                <span>Custom routes</span>
              </li>
              <li className="flex items-center">
                <i data-feather="check" className="text-green-500 mr-2"></i>
                <span>Admin dashboard</span>
              </li>
              <li className="flex items-center">
                <i data-feather="check" className="text-green-500 mr-2"></i>
                <span>Dedicated support</span>
              </li>
            </ul>
            <a href="#" className="block w-full py-3 px-6 text-center bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition btn-hover ripple">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
