import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { logginA } from "../features/details";

function LogAdmin() {
  const user = useSelector(logginA)
        return user ?  <Navigate to='/'/>:<Outlet/>
    }


    export default  LogAdmin;
