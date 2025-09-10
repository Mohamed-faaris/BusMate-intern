import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Simple steps to book your seat and manage your trips.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Sign Up</h3>
            <p className="text-gray-600">Create your account in minutes.</p>
          </div>
          
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Select Route</h3>
            <p className="text-gray-600">Choose your preferred bus route.</p>
          </div>
          
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Pick Seat</h3>
            <p className="text-gray-600">Select your favorite seat on the bus.</p>
          </div>
          
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">4</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Confirm & Pay</h3>
            <p className="text-gray-600">Get instant confirmation and enjoy your ride.</p>
          </div>
        </div>
        
        <div className="mt-16" data-aos="fade-up">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Interactive Seat Map</h3>
                <p className="text-gray-600 mb-6">Our visual seat selection makes choosing your spot intuitive and fun.</p>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <div className="seat available mr-2"></div>
                    <span className="text-sm">Available</span>
                  </div>
                  <div className="flex items-center">
                    <div className="seat booked mr-2"></div>
                    <span className="text-sm">Booked</span>
                  </div>
                  <div className="flex items-center">
                    <div className="seat selected mr-2"></div>
                    <span className="text-sm">Selected</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-4 gap-2">
                  {/* Bus seats demo */}
                  <div className="seat available"></div>
                  <div className="seat available"></div>
                  <div className="seat booked"></div>
                  <div className="seat available"></div>
                  <div className="seat available"></div>
                  <div className="seat selected"></div>
                  <div className="seat booked"></div>
                  <div className="seat available"></div>
                  <div className="seat available"></div>
                  <div className="seat available"></div>
                  <div className="seat booked"></div>
                  <div className="seat available"></div>
                  <div className="seat booked"></div>
                  <div className="seat available"></div>
                  <div className="seat booked"></div>
                  <div className="seat available"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
