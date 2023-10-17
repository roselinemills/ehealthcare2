import Card from 'react-bootstrap/Card';
function EachCard({product}) {

    return (<div>
        <div className="mb-3 p-2" onClick={()=>navigate("eachitem",{state:{id:1}})} >
      <div src={product?.image}  style={{width:"3em",height:"10px"}}  alt={product?.product_name} />
      <Card.Body >
        <div  >{product?.product_name}</div>
        <div className='text-center overflow-hidden '>{product?.description}</div>
        <div className='d-flex justify-content-around' > <div className='fw-bold'>Category:</div> <div>{product?.category}</div> </div>
        <div className='d-flex justify-content-around'> <div className='fw-bold'>Price:</div> <div>${product?.price}</div> </div>
        <div className='d-flex justify-content-around text-left'> <div className='fw-bold'>Quantity Available:</div> <div>{product?.quantity_available}</div> </div>
        <div className='d-flex justify-content-around text-left'> <div className='fw-bold'>Manufacturer:</div><div>{product?.manufacturer} </div></div>
      </Card.Body>
    </div>
    </div>  );
}

export default EachCard;