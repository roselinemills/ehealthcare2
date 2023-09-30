import { Outlet } from "react-router-dom";
import UserNav from "./userNav";

function UserPage() {
    return ( <div>
<div><UserNav/></div>
<div className="">
<Outlet/>
</div>

    </div> );
}

export default UserPage;