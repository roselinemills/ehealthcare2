import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cart";
import { useLocation, useNavigate } from "react-router-dom";
function Cart({ removeFromCart, product, clearAll }) {
  const navigate = useNavigate();
  const info = useLocation();
  let products = info.state?.cartItems;
  const getCartTotal = () => {
    return product.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  useEffect(() => {
    getCartTotal();
  }, []);
  let total = getCartTotal();
  return (
    <div className="d-flex justify-content-center ">
      <div
        className="col-md-4 col-lg-4 order-md-last border py-3 px-3"
        style={{ width: "30em", background: "white" }}
      >
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">
            Total : {getCartTotal()}
          </span>
        </h4>
        {product.length == 0 ? (
          "No Product Available"
        ) : (
          <>
            <ul className="list-group mb-3">
              {product.map((e, id) => (
                <li
                  key={id}
                  className="list-group-item d-flex justify-content-between lh-sm"
                >
                  <div>
                    <img src={e.image} alt="" style={{ width: "3em" }} />
                  </div>
                  <div
                    className=" break-word text-center py-1"
                    style={{ width: "15em" }}
                  >
                    <h6 className="my-0 ">{e.product_name}</h6>
                    <span style={{ color: " #6394F8" }}>Gh{e.price} </span>
                    <span className="mx-4">QTY:{e.quantity}</span>
                  </div>
                  <span
                    className="text-body-secondary "
                    style={{ width: "4em" }}
                  >
                    {" "}
                    {e.price * e.quantity}
                  </span>
                  <button
                    style={{ border: "none", background: "white" }}
                    onClick={() => {
                      removeFromCart(e);
                    }}
                  >
                    <i className="bi bi-x"></i>{" "}
                  </button>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <button
                className="paybtn"
                onClick={() => {
                  navigate("/epay", { state: { figure: total } });
                }}
              >
                Make Payment
              </button>
              <button
                className="py-2 px-4 mx-4"
                style={{ background: "red", color: "white", border: "none" }}
                onClick={() => {
                  clearAll();
                }}
              >
                Clear All
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
