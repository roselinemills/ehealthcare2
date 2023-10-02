import { useNavigate } from "react-router-dom";

function AdminLanding() {
    const navigate = useNavigate()
    return (  <>
    <div className="align-items-center text-center pt-4">
    <div className="py-3"><h2>Welcome Admin</h2></div>
   <div className="d-flex pt-3">
    <div><button onClick={()=>{navigate('/admin/store')}} className=" pt-5 pb-5 m-4 fs-5 fw-bold adminbtn ">Add Items</button></div>
    <div><button onClick={()=>{navigate('/admin/viewall')}} className="  pt-5 px-2 pb-5 m-4 fs-5 fw-bold adminbtn">View All Items</button></div>
   </div>
    </div>

    </>);
}

export default AdminLanding;