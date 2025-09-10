

import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

import { Button, Box, Typography } from '@mui/material';

function App() {
  useEffect(() => {
    // Initialize Feather icons
    if (window.feather) {
      window.feather.replace();
    }

    // Initialize AOS after React components mount
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }

    // Simple animation for the bus
    const bus = document.querySelector('.bus-animation');
    if (bus) {
      setInterval(() => {
        bus.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          bus.style.transform = 'translateY(0)';
        }, 500);
      }, 3000);
    }

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.ripple');
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        this.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 1000);
      });
    });
  }, []);

  return (
    <div>
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
