import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider';
import Useadmin from '../../Pages/Dashboard/hooks/useAdmin/Useadmin';
import Loading from '../../Pages/Shared/Loading/Loading';
// import { AuthContext } from '../../../Contexts/Authprovider';
// import Loading from '../../../Pages/Shared/Loading/Loading';
// import Useadmin from '../Pages/Dashboard/hooks/useAdmin/Useadmin';

const Adminroute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = Useadmin(user?.email)
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading ></Loading>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default Adminroute;