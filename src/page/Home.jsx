import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import HomeCard from './HomeCard';
import HowItWorks from './HowIt\'sWork/Work';
import TrendingLatestReviews from './TrendingLatestReviews/TrendingLatestReviews';
import Newsletter from './Nawsletter/Nawsletter';
import Testimonials from './Testimonials/Testimonials';
const Home = () => {

  const service = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
        {service?.map(service => (
          <HomeCard key={service._id} service={service}></HomeCard>
        ))}
      </div>
      <TrendingLatestReviews></TrendingLatestReviews>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
    
    </div>
  );
};

export default Home;



   