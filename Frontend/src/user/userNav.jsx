import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loggin, logout } from "../features/details";

function UserNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logs = useSelector(loggin);

  return (
    <div>
      <nav className="navbar navbar-expand-md bg-white sticky-top border-bottom">
        <div className="container">
          <a className="navbar-brand" href="#">
            MedHub
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            aria-controls="offcanvas"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvas"
            aria-labelledby="offcanvasLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasLabel">
                Aperture
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 justify-content-between">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg className="bi" width="24" height="24">
                      <use xlinkHref="#aperture"></use>
                    </svg>
                  </a>
                </li>
                <li className="nav-item  pt-2 px-2">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  {/* <svg className="bi" width="24" height="24"><use xlinkHref="#cart"></use></svg>
            <div><i className="bi bi-cart4">{carts.length}</i></div> */}
                  <div className="d-flex flex-column flex-lg-row">
                    {!logs ? (
                      <>
                        <div>
                          {" "}
                          <button
                            className="btn"
                            onClick={() => navigate("login")}
                          >
                            Login
                          </button>
                        </div>
                        <div>
                          {" "}
                          <button
                            className="btn"
                            onClick={() => navigate("create")}
                          >
                            Signup
                          </button>
                        </div>
                      </>
                    ) : (
                      <div>
                        {" "}
                        <button
                          className="btn"
                          onClick={() => {
                            dispatch(logout(null));
                            navigate("login");
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default UserNav;
