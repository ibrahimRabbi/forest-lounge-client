 import { createContext } from "react";
import { app } from "../../fireBase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile,onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect } from "react";
import { useState } from "react";

export const Context = createContext();

const AuthContext = ({ children }) => {
    
    const auth = getAuth(app)
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)



    const signUp = (email, pass) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, pass)  
    }

    const profile = (user,name,photo) => {
        return  updateProfile(user,{displayName : name,photoURL:photo})
    }

    const signIn = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
       const unSubscribe =  onAuthStateChanged(auth, (user) => {
           setUser(user)
           setLoading(false)
        })
        return ()=>  unSubscribe()
    },[auth])


    const value = {
        signUp,
        profile,
        user,
        signIn,
        logOut,
        loading
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export default AuthContext;
