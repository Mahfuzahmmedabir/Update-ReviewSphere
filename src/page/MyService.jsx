import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

import Swal from 'sweetalert2';
import DeleteAndUpdetService from './DeleteAndUpdetService';
const MyService = () => {
  const { user } = useContext(AuthContext);
  const [myServiec, setMyServiec] = useState([]);
  console.log(Object.keys(myServiec));
  useEffect(() => {
    axios
      .get(`http://localhost:5000/service?email=${user?.email}`)
      .then(data => {
        setMyServiec(data.data);
        data.data;
        console.log(data.data);
      });
  }, [user?.email]);

  return (
    <div>
      <h2>MyServie {myServiec.length}</h2>
      <div>
        {myServiec.map(service => (
          <DeleteAndUpdetService
            key={service._id}
            service={service}
          ></DeleteAndUpdetService>
        ))}
      </div>
    </div>
  );
};

export default MyService;

 
 

