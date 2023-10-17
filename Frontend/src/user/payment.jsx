import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { v4 as uuid } from 'uuid';


function Payment() {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );


    const[change,setChange] = useState(false)
    const[data,setdata] = useState()
    const unique_id = uuid();
    const small_id = unique_id.slice(0,8)

    const info= useLocation()
    let navigate = useNavigate()

    const {
      register,
      handleSubmit,
      control,
      formState: { errors },
    } = useForm();

    useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    return ( <div>
        {!change? <div className="d-flex justify-content-center px-5 pt-5 py-5">

        <form className="needs-validation border px-5 py-4" style={{maxWidth:'40em',color:'Black'}} novalidate="">




          <h4 className="mb-3">Select Mobile Moeny Network</h4>

       <div>
       <div className="form-check">
          <Controller
            name="paymentMethod"
            control={control}
            defaultValue="Mtn Momo" // Set the default selected value
            render={({ field }) => (
              <input
                id="Mtn Momo"
                type="radio"
                className="form-check-input"
                value="Mtn Momo"
                {...field}
              />
            )}
          />
          <label className="form-check-label" htmlFor="credit">
            Mtn MoMo
          </label>
        </div>
        <div className="form-check">
          <Controller
            name="paymentMethod"
            control={control}
            defaultValue="Vodafone Cash" // Set the default selected value
            render={({ field }) => (
              <input
                id="voda"
                type="radio"
                className="form-check-input"
                value="Vodafone Cash"
                {...field}
              />
            )}
          />
          <label className="form-check-label" htmlFor="debit">
            Vodafone Cash
          </label>
        </div>
        <div className="form-check">
          <Controller
            name="paymentMethod"
            control={control}
            defaultValue="AirtelTigo Cash" // Set the default selected value
            render={({ field }) => (
              <input
                id="airtel"
                type="radio"
                className="form-check-input"
                value="AirtelTigo Cash"
                {...field}
              />
            )}
          />
          <label className="form-check-label" htmlFor="paypal">
            AirtelTigo Cash
          </label>
        </div>
       </div>

          <div className="row gy-3">
            <div className="col-md-10">
              <label for="cc-name" className="form-label">Mobile Money Name</label>
              <input type="text" className="form-control"
              {...register("moName", {
                required: "Enter Mobile Money Name",

              })}
              id="cc-name" placeholder="" required=""/>
              <div className="py-2" style={{color:'red',fontSize:'0.8em'}}>
                {errors.moName?.message}
              </div>
            </div>

            <div className="col-md-10">
              <label for="cc-number" className="form-label">Mobile Money Number</label>
              <input type="text" className="form-control"
              {...register("moNumber", {
                required: "Enter Mobile Money Number",

              })}
              id="cc-number" placeholder="" required=""/>
              <div className="py-2" style={{color:'red',fontSize:'0.8em'}}>
              {errors.moNumber?.message}
              </div>
            </div>


          </div>

          <hr className="my-4"/>

          <button className="w-100 btn btn-primary btn-lg" onClick={handleSubmit((data)=>{
            setdata(data)
            setChange(true)
            setCartItems([]);
            console.log(data)
          })} >PAY {info.state.figure}</button>
        </form>
      </div>
      :
      <div className="border py-5 my-4 px-5" style={{width:'35em'}}>
  <div className="d-flex justify-content-center">
<div>
<div className=" py-2 d-flex justify-content-center">
<div className="" style={{background:'green',fontSize:'2.5em',color:'white',width:'2em', textAlign:'center',borderRadius:'50%'}}><i className="bi bi-check2"></i></div>

</div>
<div className="py-1" style={{color:'green',fontSize:'2em'}}>Payment Successful!</div>
<div>
  <div>Transaction Number :{small_id}</div>
</div>
  </div>


</div>
<hr />
  <div className="d-flex justify-content-between py-2"><div>Amount Paid:</div><div>{info.state.figure} </div></div>
  <div className="d-flex justify-content-between py-2"><div>Network:</div><div>{data?.paymentMethod}</div></div>

  <div className="text-center py-3 primary" style={{cursor:'pointer',color:" #6394F8"}}
  onClick={()=>{navigate('/')}}>Home</div>
</div>
}


    </div> );
}

export default Payment;