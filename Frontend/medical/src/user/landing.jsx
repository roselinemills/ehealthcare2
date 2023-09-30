import { useEffect, useState } from "react";
import productLink from "../services/productLink";
import ProductCard from "../components/Cards/productcard";
import { useNavigate } from "react-router-dom";
import Search from "./search";
import ShowData from "./showdata";
import Dropdown from "./dropdown";

function UserLanding() {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])
    const [info,setInfo]=useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [change, setChange]=useState('')

    useEffect(()=>{
        const fetchAll =async()=>{
            let response = (await  productLink.getAll()).data
            setInfo(response.items)
        }
        fetchAll()
    },[])

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





    //   const clearCart = () => {
    //     setCartItems([]);
    //   };







const navigate =useNavigate()

    return ( <div className=" d-flex justify-content-around" >
      <div>
        <div><button onClick={()=>navigate('cart',{state:{cartItems}})}>carts</button>
        <div>
<div className="d-flex justify-content-center">
<div><Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}/></div>
<div><Dropdown change={change} setChange={setChange}/></div>
</div>

        {cartItems.map((e,id) =>(
            <div key={id}>{e.product_name} :{e.quantity} <span onClick={()=>{
                removeFromCart(e)
            }}>*</span></div>
        ))}
            </div>
            </div>
        <div className=" d-flex justify-content-center   " >
          <div>
          <ShowData  info={info} addToCart={addToCart} selectedCategory={change} text={searchTerm}/>
          </div>


        </div>
        </div>
    </div> );
}

export default UserLanding;