import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Authentiction";



let Adminprivate = () => {
    const [auth, setAuth] = useAuth();
    
    return (

        auth?.token && auth?.user?.role == "admin" ? <Outlet /> : <Navigate to={"/"} />
    );
}

let Userprivate = () => {
    const [auth, setAuth] = useAuth();

    return (
        auth?.token && auth?.user?.role == "user" ? <Outlet /> : <Navigate to={"/"} />
    );
}


export { Adminprivate, Userprivate }