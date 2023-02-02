import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import { getAuth,signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase"
interface Props { children: JSX.Element | JSX.Element[] }
const Protected = ({ children }: Props) => {
    const test = Math.random()
    
    React.useEffect(() => {
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                const email = user.email;
                console.log(uid, email)
                if(uid != "zGYu9badGUONdh2lb1uPfs3xc3U2"){
                    signOut(auth)
                }
               

            } else {
                // User is signed out
                // ...
                navigate('/login')
            }
        });


    }, []);
    const navigate = useNavigate()
    return (
        <>
            <div>
                {children}
            </div>
        </>
    )
}

export default Protected;