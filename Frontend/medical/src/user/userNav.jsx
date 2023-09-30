
import { Link, useNavigate } from "react-router-dom";
function UserNav() {

const navigate= useNavigate()
    return (  <div>






<div className="bg-body-dark">
        <div className="d-flex justify-content-around ">
          <div href="#home" className="fs-3 fw-bold">Brand link</div>
          <div className="fs-5 "><Link to='/'>Home</Link> </div>
          <div className="fs-5 ">
            {/* <div>Login</div> */}
            <div>
              <button onClick={()=>navigate('login')}>Login</button>
              <button onClick={()=>navigate('create')}>Signup</button>
            </div>

          </div>
        </div>

  {/* Cart dropdown
   */}


      </div>
    </div>);
}

export default UserNav;