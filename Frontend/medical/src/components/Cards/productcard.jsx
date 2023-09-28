import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function ProductCard({product}) {
  const { product_name, description, category, price, quantity_available, manufacturer, image } = product;
const navigate =useNavigate()
  return (
    <Card className="mb-3 p-2" onClick={()=>navigate("eachitem",{state:{id:1}})} >
      <Card.Img className='border ' src={image}    alt={product_name} />
      <Card.Body >
        <Card.Title  >{product_name}</Card.Title>
        <Card.Text className='text-center overflow-hidden '>{description}</Card.Text>
        <Card.Text className='d-flex justify-content-around' > <div className='fw-bold'>Category:</div> <div>{category}</div> </Card.Text>
        <Card.Text className='d-flex justify-content-around'> <div className='fw-bold'>Price:</div> <div>${price}</div> </Card.Text>
        <Card.Text className='d-flex justify-content-around text-left'> <div className='fw-bold'>Quantity Available:</div> <div>{quantity_available}</div> </Card.Text>
        <Card.Text className='d-flex justify-content-around text-left'> <div className='fw-bold'>Manufacturer:</div><div>{manufacturer} </div></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;