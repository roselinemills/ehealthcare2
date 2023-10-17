import { Outlet } from "react-router-dom";
import UserNav from "./userNav";

function UserPage() {
    return ( <div>
<div><UserNav/></div>
<div className="d-flex justify-content-center pt-4 " >
<Outlet/>
</div>

    </div> );
}

export default UserPage;