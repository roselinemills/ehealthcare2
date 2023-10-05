import { useState } from "react";
import { useNavigate } from "react-router-dom";
import account from "../../services/account";
import { useForm } from "react-hook-form";

function SignupAdmin() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [spin, setSpin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div
      className="d-flex align-items-center justify-content-center py-4 mt-5 "
      style={{ maxWidth: "40em", width: "40em", height: "42em" }}
    >
      <form style={{ width: "25em" }}>
        <h1
          className="h3 mb-3 fw-normal text-center"
          style={{ color: "black" }}
        >
          Please Signup As Administrator
        </h1>

        <div>
          <div className="form-floating py-3">
            <input
              type="text"
              {...register("first", { required: "Enter First name" })}
              className="form-control"
              id="floatingInput"
              placeholder="firstname"
            />
            <label for="floatingInput">Firstname</label>
            <div className="py-2" style={{ color: "red" }}>
              {errors.first?.message}
            </div>
          </div>
          <div className="form-floating py-3">
            <input
              type="email"
              {...register("lastname", { required: "Enter Last name" })}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Lastname</label>
            <div className="py-2" style={{ color: "red" }}>
              {" "}
              {errors.lastname?.message}
            </div>
          </div>
        </div>

        <div className="form-floating py-3">
          <input
            type="email"
            required
            {...register("email", {
              required: "Enter Email",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Wrong email format",
              },
            })}
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
          <div className="py-2" style={{ color: "red" }}>
            {errors.email?.message}
          </div>
        </div>

        <div>
          <div className="form-floating py-3">
            <input
              type="text"
              {...register("phone", {
                required: "Enter Phone number",
                min: { value: 10, message: "Wrong Number format" },
              })}
              className="form-control"
              id="floatingInput"
              placeholder="firstname"
            />
            <label for="floatingInput">Contact</label>
            <div className="py-2" style={{ color: "red" }}>
              {" "}
              {errors.phone?.message}
            </div>
          </div>
          <div className="form-floating py-3">
            <input
              type="text"
              {...register("address", { required: "Enter  Address" })}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Address</label>
            <div className="py-2" style={{ color: "red" }}>
              {errors.address?.message}
            </div>
          </div>
        </div>

        <div className="form-floating py-3">
          <input
            type="password"
            {...register("password", {
              required: "Enter Password",
              minLength: {
                value: 8,
                message: "Password is short.minimum length is 8",
              },
              pattern: {
                value:
                  "/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/",
                message: "at least one numeric digit and a special character",
              },
            })}
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingInput">Password</label>
          <div className="py-2" style={{ color: "red" }}>
            {errors.password?.message}
          </div>
        </div>

        <button
          className="btn btn-success w-100 py-2"
          onClick={handleSubmit(async (e) => {
            setSpin(true);
            let datas = {
              firstName: e.first,
              lastName: e.lastname,
              email: e.email,
              password: e.password,
              phone: e.phone,
              address: e.address,
            };
            try {
              await account.adminCreate(datas);
              navigate("/login");
            } catch (error) {
              // console.log("Error in Data Entry");
              setError(error.response.data);
            } finally {
              setSpin(false);
            }
          })}
          type="button"
        >
          {spin ? (
            <div className="spinner-border" role="status"></div>
          ) : (
            "Create Account"
          )}
        </button>
        <div
          className="py-4 text-center "
          style={{ fontSize: "0.9em", cursor: "pointer" }}
          onClick={() => {
            navigate("create");
          }}
        >
          {" "}
          Already click here to login
        </div>
        <div className="text-center" style={{ color: "red" }}>
          {error?.error}
        </div>
      </form>
    </div> );
}

export default SignupAdmin;