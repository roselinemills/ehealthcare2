import Card from 'react-bootstrap/Card';
function EachCard({product}) {
    console.log(product)
    return (<div>
        <Card className="mb-3 p-2" onClick={()=>navigate("eachitem",{state:{id:1}})} >
      <Card.Img className='border ' src={product?.image}    alt={product?.product_name} />
      <Card.Body >
        <Card.Title  >{product?.product_name}</Card.Title>
        <Card.Text className='text-center overflow-hidden '>{product?.description}</Card.Text>
        <Card.Text className='d-flex justify-content-around' > <div className='fw-bold'>Category:</div> <div>{product?.category}</div> </Card.Text>
        <Card.Text className='d-flex justify-content-around'> <div className='fw-bold'>Price:</div> <div>${product?.price}</div> </Card.Text>
        <Card.Text className='d-flex justify-content-around text-left'> <div className='fw-bold'>Quantity Available:</div> <div>{product?.quantity_available}</div> </Card.Text>
        <Card.Text className='d-flex justify-content-around text-left'> <div className='fw-bold'>Manufacturer:</div><div>{product?.manufacturer} </div></Card.Text>
      </Card.Body>
    </Card>
    </div>  );
}

export default EachCard;