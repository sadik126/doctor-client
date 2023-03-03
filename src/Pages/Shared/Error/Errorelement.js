import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Authprovider';

const Errorelement = () => {
    const { Logout } = useContext(AuthContext)

    const nevigate = useNavigate();
    const error = useRouteError();

    const handleLogout = () => {
        Logout()
            .then(() => {
                nevigate('/login')

            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <p className='text-red-500'>something went wrong</p>
            <p>{error.statusText || error.message} </p>
            <h4 className="text-3xl">Please <button onClick={handleLogout} className="btn login">Log out</button> </h4>

        </div>
    );
};

export default Errorelement;