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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {service.map(service => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Home;


// git remote add origin  https://github.com/programming-hero-web-course2/b10a11-client-side-Mahfuzahmmedabir.git

// https://github.com/programming-hero-web-course2/b10a11-client-side-Mahfuzahmmedabir.git


