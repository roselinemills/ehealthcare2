import { useEffect, useState } from "react";
import productLink from "../services/productLink";
import ProductCard from "../components/Cards/productcard";
import { useNavigate } from "react-router-dom";
import Search from "./search";
import ShowData from "./showdata";
import Dropdown from "./dropdown";
import Cart from "./cart";

function UserLanding() {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  const [info, setInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [change, setChange] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      let response = (await productLink.getAll()).data;
      setInfo(response.items);
    };
    fetchAll();
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]); // Include cartItems as a dependency here


  const modelHandler = () => {
    setShow(!show);
  };
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearAll = () => {
    setCartItems([]);
  };

  const navigate = useNavigate();

  return (
    <div
      className=" d-flex justify-content-around "
      style={{ position: "relative" }}
    >
      <div>
        <div>
          <div>
            <div className="d-flex justify-content-around  text-center">
              <div className="d-flex justify-content-center ">
                <div style={{ width: "20em" }}>
                  <Search
                    setSearchTerm={setSearchTerm}
                    searchTerm={searchTerm}
                  />
                </div>
                <div style={{ width: "5em" }}>
                  <Dropdown change={change} setChange={setChange} />
                </div>
              </div>
              <div>
                <button
                  style={{
                    width: "3em",
                    height: "2em",
                    fontSize: "1.2em",
                    border: "none",
                    background: "#ff9f1c",
                    color: "#ffff",
                  }}
                  onClick={() => modelHandler()}
                >
                  <i className="bi bi-cart4 my-2"><span >{cartItems.length}</span> </i>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" d-flex justify-content-center"
          style={{ maxWidth: "55em" }}
        >
          <div>
            <ShowData
              info={info}
              addToCart={addToCart}
              selectedCategory={change}
              text={searchTerm}
            />
          </div>
        </div>
      </div>
      {show && (
        <diV style={{ position: "absolute", right: "10px", top: "45px" }}>
          <Cart
            product={cartItems}
            removeFromCart={removeFromCart}
            clearAll={clearAll}
          />
        </diV>
      )}
    </div>
  );
}

export default UserLanding;
