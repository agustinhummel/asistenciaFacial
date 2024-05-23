import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRouteAdmin = ({ element, ...rest }) => {
  const  user  = useSelector((state) => state.auth.user);
  return user?.isAdmin==true ? element : <Navigate to="/" />;
};

export default ProtectedRouteAdmin;
