import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRouteMedic = ({ element, ...rest }) => {
  const { user } = useSelector((state) => state.auth);

  return user ? element : <Navigate to="/" />;
};

export default ProtectedRouteMedic;
