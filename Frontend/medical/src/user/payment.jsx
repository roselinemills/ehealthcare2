import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
    const[change,setChange] = useState(false)
    const info= useLocation()
    let navigate = useNavigate()
    console.log(info.state)
    return ( <div>
        {!change? <div className="d-flex justify-content-center px-5 pt-5">

        <form className="needs-validation" novalidate="">




          <h4 className="mb-3">Payment</h4>

          <div className="my-3">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required=""/>
              <label className="form-check-label" for="credit">Credit card</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required=""/>
              <label className="form-check-label" for="debit">Debit card</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required=""/>
              <label className="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
              <label for="cc-name" className="form-label">Name on card</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" required=""/>
              <small className="text-body-secondary">Full name as displayed on card</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div className="col-md-6">
              <label for="cc-number" className="form-label">Credit card number</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-expiration" className="form-label">Expiration</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""/>
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" required=""/>
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr className="my-4"/>

          <button className="w-100 btn btn-primary btn-lg" onClick={()=>{setChange(true)}} >PAY</button>
        </form>
      </div>
      :
      <div className="d-flex justify-content-center">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Free</h4>
          </div>
          <div className="card-body">
            <h4>Payment of {info.state.figure} was suceesfull</h4>
            <button type="button" onClick={()=>{navigate('/')}} className="w-100 btn btn-lg btn-outline-primary">Home</button>
          </div>
        </div>
      </div>
}
    </div> );
}

export default Payment;