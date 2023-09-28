import { useNavigate } from "react-router-dom";

function AdminLanding() {
    const navigate = useNavigate()
    return (  <>
   <div><h2>Welcome Admin</h2></div>
   <div>
    <div><button onClick={()=>{navigate('/admin/store')}} className=" pt-5 pb-5 m-4 fs-4 fw-bold landingbtn ">Add Items</button></div>
    <div><button onClick={()=>{navigate('/admin/viewall')}} className="  pt-5 pb-5 m-4 fs-4 fw-bold landingbtn">View All Items</button></div>
   </div>
    </>);
}

export default AdminLanding;