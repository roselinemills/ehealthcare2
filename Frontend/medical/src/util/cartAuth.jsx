import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { loggin } from "../features/details";

function CartAuth() {
    const user = useSelector(loggin)
        return !user ?  <Navigate to='login'/>:<Outlet/>
    }


    export default  CartAuth;