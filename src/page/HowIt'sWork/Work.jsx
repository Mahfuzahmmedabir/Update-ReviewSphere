import React from 'react';
import { FaSearch, FaPen, FaComments } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-100">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
        <p className="text-gray-600 mb-8">
          Follow these three simple steps to start using ReviewSphere.
        </p>
      </div>

      {/* Steps Section */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* Step 1 */}
        <div
          className="flex flex-col items-center w-80 p-6 bg-white rounded-2xl shadow-lg"
          data-aos="fade-right"
        >
          <FaSearch className="text-blue-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Discover Reviews</h3>
          <p className="text-gray-600 text-center mt-2">
            Browse honest reviews about products, movies, and more.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center w-80 p-6 bg-white rounded-2xl shadow-lg">
          <FaPen className="text-green-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Write & Share</h3>
          <p className="text-gray-600 text-center mt-2">
            Share your experience! Help others make informed decisions.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center w-80 p-6 bg-white rounded-2xl shadow-lg">
          <FaComments className="text-purple-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Engage & Influence</h3>
          <p className="text-gray-600 text-center mt-2">
            Interact with the community by liking and commenting on reviews.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <a
          href=""
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
