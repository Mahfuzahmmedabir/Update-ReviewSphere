import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-5xl text-gray-600 mb-6">Oops! Page not found</h2>
      <p className="text-gray-500 mb-8">The page you are looking for might have been removed or does not exist.</p>
      <Link to="/" className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFound;