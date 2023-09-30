import {  useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { logginA } from "../features/details";


function AuthProvider() {
const user = useSelector(logginA)
    return user ? <Outlet/> : <Navigate to='/login'/>
}


export default  AuthProvider;

