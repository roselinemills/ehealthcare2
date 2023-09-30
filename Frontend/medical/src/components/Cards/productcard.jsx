import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function ProductCard({product}) {
  console.log(product)
  const { product_name, description, category, price, quantity_available, manufacturer, image } = product;
const navigate =useNavigate()
  return (
    <div className="mb-3 p-2" onClick={()=>navigate("eachitem",{state:{id:1}})} >
      <Card.Img src={image} style={{width:"10em",height:'8em'}}   alt={product_name} />
      <Card.Body >
        <Card.Title  style={{fontSize:"0.8em"}} className="py-2" >{product_name}</Card.Title>
        {/* <Card.Text className='text-center overflow-hidden '>{description}</Card.Text> */}
        <Card.Text className='d-flex ' > <div className='fw-bold'>Category:</div> <div>{category}</div> </Card.Text>
        <Card.Text className='d-flex  '> <div className='fw-bold'>Price:</div> <div>${price}</div> </Card.Text>
        <Card.Text className='d-flex '> <div className='fw-bold'>Quantity Available: </div> <div>{quantity_available}</div> </Card.Text>

      </Card.Body>
    </div>
  );
}

export default ProductCard;