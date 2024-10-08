import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
const [user, setUser]= useState([]);
const [loading, setLoading]= useState(true);

const createUser=(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn=(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const googleSignIn = ()=>{
    setLoading(true);
    return signInWithPopup(auth, provider)
}


const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false)
    })
    return()=>{
        return unsubscribe();
    }
},[])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;