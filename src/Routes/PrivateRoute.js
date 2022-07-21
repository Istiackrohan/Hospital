import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
import useAuth from '../Hooks/useAuth';

const PrivateRoute = () => {
    const { user } = useAuth();
    console.log(user)
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;