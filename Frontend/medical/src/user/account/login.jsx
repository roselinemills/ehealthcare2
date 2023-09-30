import { useState } from "react";
import { useNavigate } from "react-router-dom";
import account from "../../services/account";
// import { useDispatch,useSelector, useStore } from "react-redux";
import { login } from "../../features/details";
import { useDispatch } from "react-redux";

function LoginUser () {
  let dispatch = useDispatch()
    const navigate = useNavigate()
    const [inputs,setInput]=useState({
        email:'',
        password:''
    })
    return ( <div className="d-flex align-items-center justify-content-center py-4 " style={{maxWidth:"40em",width:"40em",height:"30em"}}>
        <form  style={{width:'25em'}}>

    <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

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
    <div className="form-floating py-3">
      <input type="password"
      value={inputs.password}
      required
      onChange={(e) => {
        setInput({ ...inputs, password: e.target.value });
      }}
      className="form-control" id="floatingPassword" placeholder="Password"/>
      <label >Password</label>
    </div>


    <button className="btn btn-primary w-100 py-2"
    onClick={async (e) => {
        e.preventDefault();
        try {
          const response =await account.log(inputs);
          dispatch(login(response.data))
          console.log(response)

          navigate('/')
        } catch (error) {
          console.log("Error in Data Entry");
        }
      }}
    type="submit">Sign in</button>
    <div className="py-4 text-center " style={{fontSize:"0.9em"}} onClick={()=>{navigate('/create')}}> Dont have an Account?</div>


  </form>
    </div> );
}

export default  LoginUser  ;