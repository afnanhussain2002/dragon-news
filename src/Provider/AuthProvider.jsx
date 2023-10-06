import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true);
    // Create a user
    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    // Login a user
    const userLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe(); 
        } 
    },[])
    
    const authInfo = {user, createUser, logOut, userLogin, loading}
    return (
        <>
           <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider> 
        </>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;