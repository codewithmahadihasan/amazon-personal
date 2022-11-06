import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Auth } from './Components/Context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Auth)
    const location = useLocation()

    if (loading) {
        return <div className='py-80 bg-gray-700'>
            <div className="w-20 h-20 mx-auto  border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
        </div>
    }


    if (user && user.uid) {
        return children
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace  ></Navigate >
    );
};

export default PrivateRoute;