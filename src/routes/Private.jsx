import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Private = ({ children }) => {
  const { user, lodging } = useContext(AuthContext);
  if (lodging) {
    return (
      <div className="text-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={'/login'}></Navigate>;
};

export default Private;
