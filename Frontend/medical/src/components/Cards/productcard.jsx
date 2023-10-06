import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function ProductCard({product}) {

  const { product_name, description, category, price, quantity_available, manufacturer, image } = product;
const navigate =useNavigate()
  return (
    <div className="p-2 justify-content-center" style={{letterSpacing:'1px'}} onClick={()=>navigate("eachitem",{state:{id:1}})} >
      <div><img src={image} style={{width:"10em",height:'8em'}}   alt={product_name} />
      </div>
      <div >
        <div  style={{fontSize:"0.9em" ,color:' #6394F8'}} className=" text-center fw-bold d-flex  " >{product_name}</div>
        {/* <div className='text-center overflow-hidden '>{description}</div> */}
        <div className='text-center pb-3 fw-bold'  style={{fontSize:"0.8em",color: '#ff9f1c'}}  >  <div>{category}</div> </div>
        <div className='d-flex justify-content-around '>  <div>${price}</div> <div>{quantity_available}</div>  </div>
        {/* <div className='d-flex '> <div className='fw-bold'>Quantity Available: </div> <div>{quantity_available}</div> </div> */}

      </div>
    </div>
  );
}

export default ProductCard;