import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            console.log('user observing')
            setUser(currentuser)
        })

        return () => unsubscribe()
    }, [])
    const authInfo = {
        createUser,
        signInUser,
        user,
        Logout
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;