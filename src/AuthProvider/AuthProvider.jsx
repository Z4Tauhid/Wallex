import React, { createContext, useEffect, useState } from 'react';
import app from './AuthInit';
import { getAuth,GithubAuthProvider , GoogleAuthProvider , createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {


const [user, setUser] = useState(null)
    // Register User Using Email Password

    const [emailverified, setEmailVerified] = useState(false)
   

    const registerUser = (email, password) =>{


        return createUserWithEmailAndPassword(auth, email, password)

    }


    // Send A Verification MAil To The USer MAil Address

    const verifyEmail =(user) => {

        return sendEmailVerification(user)
    }

    // Log In user using email, password

    const logInUser =(email, password)=>{

        return signInWithEmailAndPassword(auth, email, password)
    }


    // sign Out User

    const signOutUser = () =>{
        return signOut(auth)
    }

    // Observer

    // Loading and Unloading by using Observer

//    login with Google
    const provider = new GoogleAuthProvider()
   const googleSignIn = () => {
    return signInWithPopup(auth, provider)
   }

   const gitProvider = new GithubAuthProvider();

   const gitLogin =() =>{
    return signInWithPopup(auth, gitProvider)
   }
   
   
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    },[])


//    console.log(user)

   // Load balance from localStorage, or default to 500

   const [balance, setBalance] = useState(() =>{
    const savedBalance = localStorage.getItem("balance")
    return savedBalance ? Number(savedBalance) : 10000;
   })

   // Sync balance to localStorage whenever it changes

   useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);


    const updateUserInfo=(updateData)=> {

        return updateProfile(auth.currentUser, updateData)
    }

    const resetPassword =(email) => {
        return sendPasswordResetEmail(auth, email)
    }
   
    const authData = {

        registerUser,
        verifyEmail,
        logInUser,
        signOutUser,
        user,
        setUser,
        balance,
        setBalance,
        loading,
        setLoading,
        updateUserInfo,
        emailverified,
        setEmailVerified,
        resetPassword,
        googleSignIn,
        gitLogin
        
        
        
       
        
    }
   
   return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;