import { useState } from "react";
import { useNavigate } from "react-router-dom";
import account from "../../services/account";
import { useDispatch } from "react-redux";
import { alogin, logginA, selectAdmin } from "../../features/details";



function LoginAdmin () {


  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [spin, setSpin] = useState(false);
  const [success, setSucces] = useState(false);
  const [inputs, setInput] = useState({
    email: "",
    password: "",
  });
  return (
    <div
      className="d-flex align-items-center justify-content-center py-4 "
      style={{ maxWidth: "40em", width: "40em", height: "30em" }}
    >
      <form className="border py-5 px-5" style={{ width: "30em" }}>
        <h1
          className="h3 mb-3 fw-normal text-center"
          style={{ color: "black" }}
        >
         Login As Administrator
        </h1>

        <div className="form-floating py-3">
          <input
            type="email"
            value={inputs.email}
            required
            onChange={(e) => {
              setInput({ ...inputs, email: e.target.value });
            }}
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating py-3">
          <input
            type="password"
            value={inputs.password}
            required
            onChange={(e) => {
              setInput({ ...inputs, password: e.target.value });
            }}
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label>Password</label>
        </div>

        <button
          className="btn btn-primary w-100 py-2"
          onClick={async (e) => {
            e.preventDefault();
            setSpin(true);
            try {
              const response = await account.adminLog(inputs);

              dispatch( alogin(response?.data));
              setSucces(!success);
              navigate("/admin");
            } catch (error) {
              setError(error.response?.data);
            } finally {
              setSpin(false);
              setSucces(false);
            }
          }}
          type="submit"
        >
          {spin ? (
            <div className="spinner-border" role="status"></div>
          ) : (
            "Sign in"
          )}
        </button>
        <div
          className="py-4 text-center "
          style={{ fontSize: "0.9em" }}
          onClick={() => {
            navigate("/create");
          }}
        >
          {" "}
          Dont have an Account?
        </div>
        <div className="text-center" style={{ color: "green" }}>
          {success && "LOGIN IS SUCCESSFUL"}
        </div>
        <div className="text-center" style={{ color: "red" }}>
          {error?.error}
        </div>
      </form>
    </div> );
}

export default  LoginAdmin   ;