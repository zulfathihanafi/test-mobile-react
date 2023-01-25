import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase"
interface Props { children: JSX.Element | JSX.Element[] }
const Protected = ({ children }: Props) => {
    const test = Math.random()
    const [user, setUser] = React.useState<any>(test > 0.5 ? "Allowed" : undefined);
    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                const email = user.email;
                console.log(uid, email)

                setUser(user)

            } else {
                // User is signed out
                // ...
                navigate('/login')
            }
        });


    }, [user]);
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