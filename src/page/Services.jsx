import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
  const service = useLoaderData();
  service;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
      {service?.map(items => (
        <Service key={items._id} service={items}></Service>
      ))}
    </div>
  );
};

export default Services;
