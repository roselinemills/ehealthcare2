
import { useLocation } from "react-router-dom";

import EditInput from "../editng/edititem";

function UpdateItem() {

    const location = useLocation()
    let info =location.state?.e

    return (  <div className="d-flex justify-content-center  py-4 px-3 text-center" style={{color:'black' }} >
        <EditInput product={info}/>
    </div>);
}

export default UpdateItem;