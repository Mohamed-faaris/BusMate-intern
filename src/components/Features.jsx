import React from 'react';
import '../index.css';

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Amazing Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to manage your bus transportation efficiently</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <i data-feather="calendar" className="text-indigo-600 w-8 h-8"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Easy Booking</h3>
            <p className="text-gray-600">Book your seat in just a few taps. No more waiting in long queues.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="200">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <i data-feather="map" className="text-indigo-600 w-8 h-8"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Route Management</h3>
            <p className="text-gray-600">View all available routes and schedules in real-time.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="300">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <i data-feather="shield" className="text-indigo-600 w-8 h-8"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Secure Platform</h3>
            <p className="text-gray-600">Your data is protected with industry-standard security measures.</p>
          </div>
          
          {/* Feature 4 */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="400">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <i data-feather="bar-chart-2" className="text-indigo-600 w-8 h-8"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Dashboard</h3>
            <p className="text-gray-600">Track your bookings and payment history in one place.</p>
          </div>
          
          {/* Feature 5 */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="500">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <i data-feather="users" className="text-indigo-600 w-8 h-8"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">User Management</h3>
            <p className="text-gray-600">Easily manage drivers, students, and administrators.</p>
          </div>
          
          {/* Feature 6 */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="600">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <i data-feather="bell" className="text-indigo-600 w-8 h-8"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Notifications</h3>
            <p className="text-gray-600">Get instant alerts about schedule changes and updates.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
