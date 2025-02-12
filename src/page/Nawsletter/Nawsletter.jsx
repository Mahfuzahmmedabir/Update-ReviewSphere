 import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Newsletter = () => {
    React.useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <section className="py-12 bg-gray-300">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <FaEnvelope className="text-blue-500 text-5xl mb-4" />
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Stay Updated!</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter and never miss an update.
        </p>
      </div>

      {/* Subscription Form */}
      <div className="flex flex-col items-center justify-center">
        <div
          className="bg-white p-6 rounded-2xl shadow-lg max-w-xl w-full"
          data-aos="zoom-in"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full border rounded-lg focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
