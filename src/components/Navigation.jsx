import React from 'react';
import '../index.css';
import { Button, Box, Typography } from '@mui/material';

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full text-white font-bold text-xl mr-2">
              BM
            </div>
            <span className="text-xl font-bold text-gray-800">BusMate</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="px-4 py-2 text-indigo-600 font-medium rounded-full hover:bg-indigo-50 transition">Login</a>
            <a href="#" className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition btn-hover ripple">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
