import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

import DeleteAndUpdetService from './DeleteAndUpdetService';

import { Helmet } from 'react-helmet';
const MyService = () => {
  const { user } = useContext(AuthContext);
  const [myServiec, setMyServiec] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://review-sphere-server.vercel.app/service?email=${user?.email}`
      )
      .then(data => {
        setMyServiec(data.data);
        data.data;
        console.log(data.data);
      });
  }, [user?.email]);

  return (
    <div>
      <Helmet>
        <title>ReviewSphere || MyService</title>
      </Helmet>
      <h2 className="text-2xl">
        My <span>service</span> {myServiec.length}
      </h2>
      <div>
        {myServiec.map(service => (
          <DeleteAndUpdetService
            key={service._id}
            services={service}
          ></DeleteAndUpdetService>
        ))}
      </div>
    </div>
  );
};

export default MyService;
