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
      .get(
        `https://review-sphere-server.vercel.app/review?email=${user?.email}`
      )
      .then(data => {
        setMyReview(data.data);
      });
  }, [user?.email]);
  return (
    <div>
      <Helmet>
        <title>ReviewSphere || MyReview</title>
      </Helmet>
      <div className="lg:p-10">
        {myReview?.map(items => (
          <MyReviews key={items._id} myReviews={items}></MyReviews>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
