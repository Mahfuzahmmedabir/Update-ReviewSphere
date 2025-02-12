import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';
import { FaSearch } from 'react-icons/fa';

const Services = () => {
  const service = useLoaderData();

  return (
    <div>
      <div className="h-80 border-b-2 bg-slate-900 py-10 ">
        <h2 className="text-center text-white  text-4xl font-bold">
          Find a company you can Turst
        </h2>
        <p className="text-center text-white text-2xl mt-3 font-semibold">
          Real reviews by real people.
        </p>
        <div className=" mt-10">
          <label className="input input-bordered rounded-full lg:w-[450px]  mx-auto flex items-center gap-2">
            <input type="text" className="grow " placeholder="Search" />
            <FaSearch />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
        {service?.map(items => (
          <Service key={items._id} service={items}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
