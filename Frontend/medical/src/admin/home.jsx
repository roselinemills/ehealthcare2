import { Outlet } from "react-router-dom";

function Admin() {
    return (  <div>
        Am Admin
        <Outlet/>
    </div>);
}

export default Admin;