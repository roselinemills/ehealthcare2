import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/cart';
import { useLocation, useNavigate } from 'react-router-dom';
function Cart({showModal, toggle,prod}) {
const navigate = useNavigate()
const info = useLocation()
let product =info.state?.cartItems
   const getCartTotal = () => {
       return product.reduce((total, item) => total + item.price * item.quantity, 0);
       };
       useEffect(()=>{
        getCartTotal()
      },[])
    let  total =getCartTotal()
return(
<div className='d-flex justify-content-center pt-5'>
<div className="col-md-4 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">{product.length}</span>
        </h4>
        <ul className="list-group mb-3">
          {
            product.map((e,id)=>(
<li key={id} className="list-group-item d-flex justify-content-between lh-sm">
  <div>
    <img src={e.image} alt="" style={{width:'3em'}} />
  </div>
            <div>
              <h6 className="my-0">{e.product_name}</h6>
            </div>
            <span className="text-body-secondary">Gh{e.price} * {e.quantity} = {e.price *e.quantity}</span>
          </li>
            ))
          }

        </ul>
        <div className='text-center'> <h6>Total : {getCartTotal()}</h6></div>

        <form className="card p-2">
          <div className="input-group">

            <button type="submit" className="btn btn-secondary" onClick={()=>{navigate('/epay', {state:{figure:total}})}}>Make Payment</button>
          </div>
        </form>
      </div>
</div>

)

    }

export default Cart;