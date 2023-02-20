import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googlesignIN = (auth, provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo)

    }

    const Logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            console.log('user observing')
            setUser(currentuser)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])
    const authInfo = {
        createUser,
        signInUser,
        user,
        Logout,
        updateProfile,
        loading,
        googlesignIN
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;