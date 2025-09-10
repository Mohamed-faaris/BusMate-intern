import React from 'react';
import '../index.css';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Have questions? We're here to help you get started with BusMate.</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-up">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Send us a message</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                  <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition btn-hover ripple">Send Message</button>
              </form>
            </div>
            <div className="md:w-1/2 bg-indigo-600 text-white p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i data-feather="mail" className="mr-4 w-6 h-6"></i>
                  <span>hello@busmate.com</span>
                </div>
                <div className="flex items-start">
                  <i data-feather="phone" className="mr-4 w-6 h-6"></i>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start">
                  <i data-feather="map-pin" className="mr-4 w-6 h-6"></i>
                  <span>123 Campus Drive, University City, CA 92122</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-indigo-700 rounded-full flex items-center justify-center hover:bg-indigo-800 transition">
                    <i data-feather="facebook" className="w-5 h-5"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-indigo-700 rounded-full flex items-center justify-center hover:bg-indigo-800 transition">
                    <i data-feather="twitter" className="w-5 h-5"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-indigo-700 rounded-full flex items-center justify-center hover:bg-indigo-800 transition">
                    <i data-feather="instagram" className="w-5 h-5"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-indigo-700 rounded-full flex items-center justify-center hover:bg-indigo-800 transition">
                    <i data-feather="linkedin" className="w-5 h-5"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
