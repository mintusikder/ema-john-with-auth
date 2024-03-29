import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app)
 const AuthProvider = ({children}) => {
    // const user = {email: "mintu"}
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
            return createUserWithEmailAndPassword(auth, email,password)
    }

    const siginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOut =() =>{
        return signOut(auth)
    }

    // observe user auth state
    useEffect(() =>{
      const unSubscribe =  onAuthStateChanged(auth, createUser =>{
            setUser(createUser)
            setLoading(false)
        })
        // stop observe
        return () =>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        siginUser,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;