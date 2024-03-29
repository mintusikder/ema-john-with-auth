import React, { createContext, useState } from 'react';
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app)
 const AuthProvider = ({children}) => {
    // const user = {email: "mintu"}
    const [user, setUser] = useState(null)

    const createUser = (email, password)=>{
            return createUserWithEmailAndPassword(auth, email,password)
    }

    const siginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOut =() =>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        createUser,
        siginUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;