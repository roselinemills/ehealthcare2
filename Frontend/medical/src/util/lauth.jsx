import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { loggin } from "../features/details";

function LogProvider() {
    const user = useSelector(loggin)
        return user ?  <Navigate to='/'/>:<Outlet/>
    }


    export default  LogProvider;