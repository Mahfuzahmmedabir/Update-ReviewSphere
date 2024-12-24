import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import HomeCard from './HomeCard';
const Home = () => {
  const service = useLoaderData()
  console.log(service)


  return (
    <div>
      <Banner></Banner>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4'>
        {service?.map(service => (
          <HomeCard  key={service._id} service={service}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;




