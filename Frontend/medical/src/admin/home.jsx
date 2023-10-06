import { Outlet } from "react-router-dom";
import AdminNav from "./adminNav";
function Admin() {
    return (  <div >
        <div className=" "><AdminNav/></div>
        <div className=" d-flex justify-content-center  pt-3">
        <Outlet/>
        </div>

    </div>);
}

export default Admin;