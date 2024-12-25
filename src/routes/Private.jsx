import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Private = ({ children }) => {
  const { user, lodging } = useContext(AuthContext);
  const navegate = useNavigate();
  if (lodging) {
    return (
      <div className="text-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  if (user && user?.email) {
    return children
     
  }
  return navegate('/login')

};

export default Private;
