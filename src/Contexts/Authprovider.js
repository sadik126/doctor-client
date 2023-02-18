import React, { createContext } from 'react';
import getAuth from 'firebase/auth';
import app from '../../Firebase.init';

export const AuthContext = createContext();
const Auth = getAuth(app)

const Authprovider = ({ children }) => {
    const authInfo = {

    }
    return (
        <AuthContext.Provider value={authInfo}>

        </AuthContext.Provider>
    );
};

export default Authprovider;