import React, { useEffect, useState } from 'react';
import { FaUsers, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    review:
      'This platform has transformed the way I interact with reviews! Highly recommended!',
    image: 'https://i.ibb.co.com/PZVWkPdT/pexels-maksgelatin-5486199.jpg',
  },
  {
    name: 'Jane Smith',
    review:
      'A fantastic community where honest reviews shape better decisions.',
    image:
      'https://i.ibb.co.com/0pWsmdZT/pexels-justin-shaifer-501272-1222271.jpg',
  },

  {
    name: 'Michael Lee',
    review:
      'Love being part of this amazing community. Great insights and genuine reviews!',
    image: 'https://i.ibb.co.com/PZVWkPdT/pexels-maksgelatin-5486199.jpg',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gray-300">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Community & User Testimonials
        </h2>
        <p className="text-gray-600 mb-8">
          See what our users have to say about their experience.
        </p>
      </div>

      {/* Testimonials Auto Slider */}
      <div className="flex justify-center items-center px-4 relative">
        <div className="flex flex-col items-center w-96 p-6 bg-white rounded-2xl shadow-lg">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-20 h-20 rounded-full mb-4"
          />
          <FaQuoteLeft className="text-gray-400 text-3xl mb-2" />
          <p className="text-gray-600 text-center italic">
            "{testimonials[currentIndex].review}"
          </p>
          <h3 className="text-lg font-semibold mt-4">
            {testimonials[currentIndex].name}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
