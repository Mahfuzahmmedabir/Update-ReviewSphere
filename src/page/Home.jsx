import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';
const Home = () => {
  const service = useLoaderData()
  console.log(service)


  return (
    <div>
      <Banner></Banner>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4'>
        {service?.map(service => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Home;




