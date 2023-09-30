import { useState } from "react";
import account from "../../services/account";
import { useNavigate } from "react-router-dom";

function SignupUser() {
    const navigate = useNavigate()
    const [inputs,setInput]=useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        address: ""
    })
    return (<div className="d-flex align-items-center justify-content-center py-4 mt-5 " style={{maxWidth:"40em",width:"40em",height:"42em"}}>
    <form  style={{width:'25em'}}>

<h1 className="h3 mb-3 fw-normal text-center">Please Signup</h1>

<div>
<div className="form-floating py-3">
  <input type="text"
   value={inputs.firstName}
   required
   onChange={(e) => {
     setInput({ ...inputs, firstName: e.target.value });
   }}
  className="form-control" id="floatingInput" placeholder="firstname"/>
  <label for="floatingInput">Firstname</label>
</div>
<div className="form-floating py-3">
  <input type="email"
   value={inputs.lastName}
   required
   onChange={(e) => {
     setInput({ ...inputs, lastName: e.target.value });
   }}
  className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Lastname</label>
</div>
</div>


<div className="form-floating py-3">
  <input type="email"
   value={inputs.email}
   required
   onChange={(e) => {
     setInput({ ...inputs, email: e.target.value });
   }}
  className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>

<div>
<div className="form-floating py-3">
  <input type="text"
   value={inputs.phone}
   required
   onChange={(e) => {
     setInput({ ...inputs, phone: e.target.value });
   }}
  className="form-control" id="floatingInput" placeholder="firstname"/>
  <label for="floatingInput">Contact</label>
</div>
<div className="form-floating py-3">
  <input type="email"
   value={inputs.address}
   required
   onChange={(e) => {
     setInput({ ...inputs, address: e.target.value });
   }}
  className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Address</label>
</div>
</div>



<div className="form-floating py-3">
  <input type="password"
  value={inputs.password}
  required
  onChange={(e) => {
    setInput({ ...inputs, password: e.target.value });
  }}
  className="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingInput" >Password</label>
</div>


<button className="btn btn-success w-100 py-2"
onClick={async (e) => {
    e.preventDefault();
    try {
        console.log(inputs)
      await account.create(inputs);
      navigate('/login')
    } catch (error) {
      console.log("Error in Data Entry");
    }
  }}
type="submit">Create Account</button>
<div className="py-4 text-center " style={{fontSize:"0.9em"}} onClick={()=>{navigate('/login')}}> Already click here to login</div>

</form>
</div> );
}

export default SignupUser;