import React from 'react';
import { FaFire, FaStar, FaClock } from 'react-icons/fa';

const TrendingLatestReviews = () => {
  return (
    <section className="py-12 shadow-xl  bg-gray-300">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Trending & Latest Reviews
        </h2>
        <p className="text-gray-600 mb-8">
          Check out the hottest and most recent reviews from our community.
        </p>
      </div>
      {/* Review Categories */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* Trending Reviews */}
        <div className="flex flex-col items-center w-80 p-6 bg-white rounded-2xl shadow-lg">
          <FaFire className="text-red-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Trending Reviews</h3>
          <p className="text-gray-600 text-center mt-2">
            Discover what’s popular and making waves.
          </p>
          <a
            href=""
            className="mt-4 text-blue-600 font-semibold hover:underline"
          >
            View More
          </a>
        </div>
        {/* Top Rated Reviews */}
        <div className="flex flex-col items-center w-80 p-6 bg-white rounded-2xl shadow-lg">
          <FaStar className="text-yellow-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Top Rated Reviews</h3>
          <p className="text-gray-600 text-center mt-2">
            Explore the most highly rated reviews.
          </p>
          <a
            href=""
            className="mt-4 text-blue-600 font-semibold hover:underline"
          >
            View More
          </a>
        </div>
        {/* Latest Reviews */}
        <div className="flex flex-col items-center w-80 p-6 bg-white rounded-2xl shadow-lg">
          <FaClock className="text-blue-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Latest Reviews</h3>
          <p className="text-gray-600 text-center mt-2">
            Read the newest reviews from our users.
          </p>
          <a
            href=""
            className="mt-4 text-blue-600 font-semibold hover:underline"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrendingLatestReviews;
