import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import Swal from 'sweetalert2';
import app from '../Farebase';
import { useNavigate } from 'react-router-dom';



export const Auth = createContext()


const UseContext = ({ children }) => {
    // const navigate = useNavigate()
    const auth = getAuth(app)
    const [user, setUser] = useState()
    const provider = new GoogleAuthProvider();

    const [loading, setLoading] = useState(true)

    const Google = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)


    }

    const setName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!

            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    const RegistrationInEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password,)

    }


    const loginWithEamil = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)


    }
    const verify = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            });
    }

    const logOut = () => {
        setLoading(false)
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser('')
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            setUser(user)
            setLoading(false)

        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = { RegistrationInEmail, loginWithEamil, setName, user, logOut, verify, Google, loading }
    return (
        <Auth.Provider value={authInfo}>
            {children}
        </Auth.Provider>
    );
};

export default UseContext;