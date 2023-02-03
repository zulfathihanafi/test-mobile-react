import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import { getAuth,signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase"
import { FirebaseAuthentication } from "@capacitor-firebase/authentication";
interface Props { children: JSX.Element | JSX.Element[] }
const getCurrentUser = async () => {
    const result = await FirebaseAuthentication.getCurrentUser();
    console.log(result.user);
    return result.user;
  };
const Protected = ({ children }: Props) => {
    const test = Math.random()
    
    React.useEffect(() => {
        getCurrentUser().then((user)=>{
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              const email = user.email;
              console.log(uid, email)
              if(uid != "8lTMUiqdgQN8qBgpkUv3iOZR94z2"){
                FirebaseAuthentication.signOut() 
              }
             
      
          } else {
              // User is signed out
              // ...
              console.log('get current user')
              navigate('/login')
          }
          })

        FirebaseAuthentication.addListener('authStateChange',(user)=>{
            if (user.user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.user?.uid;
                const email = user.user?.email;
                console.log(uid, email)
                if(uid != "8lTMUiqdgQN8qBgpkUv3iOZR94z2"){
                    FirebaseAuthentication.signOut() 
                }
               
        
            } else {
                // User is signed out
                // ...
                navigate('/login')
            }
        })
            
        // onAuthStateChanged(auth,(user)=>{
        //     getCurrentUser().then((user)=>{
        //         if (user) {
        //           // User is signed in, see docs for a list of available properties
        //           // https://firebase.google.com/docs/reference/js/firebase.User
        //           const uid = user.uid;
        //           const email = user.email;
        //           console.log(uid, email)
        //           if(uid != "8lTMUiqdgQN8qBgpkUv3iOZR94z2"){
        //               signOut(auth)
        //           }
                 
          
        //       } else {
        //           // User is signed out
        //           // ...
        //           navigate('/login')
        //       }
        //       })
        // })


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