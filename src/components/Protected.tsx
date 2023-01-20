import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
interface Props { children: JSX.Element | JSX.Element[] }
const Protected = ({children}:Props) => {
    const [user,setUser] = React.useState("");
    const navigate = useNavigate()
    if(user){
        
        return (
        
            <div>
                {children}
            </div>
        );
    }else{
        navigate('/login')
        return <Login />
    }
}

export default Protected;