import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsService = () => {
  const details = useLoaderData()
  console.log(details)
  
  return (
    <div>
      sdffsdf
    </div>
  );
};

export default DetailsService;