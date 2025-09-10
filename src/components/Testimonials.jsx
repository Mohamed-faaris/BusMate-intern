import React from 'react';
import '../index.css';

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Don't just take our word for it</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img src="http://static.photos/people/200x200/1" alt="User" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                <p className="text-gray-500 text-sm">Student at UCLA</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">"BusMate has completely transformed my daily commute. I can book my seat in seconds and always know when my bus is arriving."</p>
            <div className="flex text-yellow-400">
              <i data-feather="star" className="w-5 h-5 fill-current"></i>
              <i data-feather="star" className="w-5 h-5 fill-current"></i>
              <i data-feather="star" className="w-5 h-5 fill-current"></i>
              <i data-feather="star" className="w-5 h-5 fill-current"></i>
              <i data-feather="star" className="w-5 h-5 fill-current"></i>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img src="http://static.photos/people/200x200/2" alt="User" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Michael Chen</h4>
                <p className="text-gray-500 text-sm">Transport Coordinator</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">"Managing our campus buses has never been easier. The admin dashboard gives us complete control over routes and schedules."</p>
            <div className="flex text-yellow-400">
              <i data-feather="star" className="w-5 h-5 fill-current"></i>
              <i data-feather="star" className="w-5 h-5 fill-current"></i>
              <i data-feather="star" className="w-5 h-5 fill-current"></i>
              <i data-feather="star" className="w-5 h-5 fill-current"></i>
              <i data-feather="star" className="w-5 h-5 fill-current"></i>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img src="http://static.photos/people/200x200/3" alt="User" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Emma Rodriguez</h4>
                <p className="text-gray-500 text-sm">Daily Commuter</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">"I love being able to see exactly which seats are available. No more guessing games when boarding the bus!"</p>
            <div className="flex text-yellow-400">
              <i data-feather="star" className="w-5 h-5 fill-current"></i>
              <i data-feather="star" className="w-5 h-5 fill-current"></i>
              <i data-feather="star" className="w-5 h-5 fill-current"></i>
              <i data-feather="star" className="w-5 h-5 fill-current"></i>
              <i data-feather="star" className="w-5 h-5 fill-current"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
