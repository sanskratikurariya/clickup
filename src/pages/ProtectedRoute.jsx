// components/PrivateRoute.js
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // or localStorage

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
