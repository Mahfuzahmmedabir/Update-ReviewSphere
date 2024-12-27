import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import MyReviews from './MyReviews';
import { Helmet } from 'react-helmet';

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/review?email=${user?.email}`)
      .then(data => {
        setMyReview(data.data);
      });
  }, [user?.email]);
  return (
    <div>
      <Helmet>
        <title>ReviewSphere || MyReview</title>
      </Helmet>
      <div className="p-10">
        {myReview?.map(items => (
          <MyReviews key={items._id} myReviews={items}></MyReviews>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
