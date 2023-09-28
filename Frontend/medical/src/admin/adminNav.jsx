import { Link } from "react-router-dom";

function AdminNav() {
    return (  <div>


<div className="bg-body-dark">
        <div className="d-flex justify-content-around ">
          <div href="#home" className="fs-3 fw-bold">Brand link</div>
          <div className="fs-5 "><Link to='/admin'>Home</Link> </div>
          <div className="fs-5 ">Logout</div>
        </div>
      </div>



    </div>);
}

export default AdminNav;