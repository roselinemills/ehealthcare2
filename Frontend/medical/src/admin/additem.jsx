import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddItem() {
    // const  labels =product_name: DataTypes.STRING,
    // description: DataTypes.TEXT,
    // category: DataTypes.STRING,
    // price: DataTypes.FLOAT,
    // image: DataTypes.STRING,
    // quantity_available: DataTypes.INTEGER,
    // manufacturer: DataTypes.STRING
    return (  <div>
        <div><h2 className='fw-bold'>Product Entry Point</h2></div>
        <div className="d-flex justify-content-center align-items-center " >
         <Form className="p-4" style={{ minWidth: '600px' }}>
      <Form.Group className='mt-3 mb-3 '>
        <Form.Label className='fw-bold fs-5' >Product Name</Form.Label>
        <Form.Control type="text" style={{ height: '60px' }} className='p-2' placeholder="Enter product name" />
      </Form.Group>

      <Form.Group className='mt-3 mb-3 ' controlId="description">
        <Form.Label className='fw-bold fs-5' >Description</Form.Label>
        <Form.Control as="textarea" className='p-2' rows={3} placeholder="Enter description" />
      </Form.Group>

      <Form.Group className='mt-3 mb-3 ' controlId="category">
        <Form.Label className='fw-bold fs-5' >Category</Form.Label>
        <Form.Control type="text" className='p-2' style={{ height: '60px' }} placeholder="Enter category" />
      </Form.Group>

      <Form.Group className='mt-3 mb-3 ' controlId="price">
        <Form.Label className='fw-bold fs-5' >Price</Form.Label>
        <Form.Control type="number" className='p-2' style={{ height: '60px' }} placeholder="Enter price" />
      </Form.Group>

      <Form.Group className='mt-3 mb-3 ' controlId="quantityAvailable">
        <Form.Label className='fw-bold fs-5' >Quantity Available</Form.Label>
        <Form.Control type="number" style={{ height: '60px' }} className='p-2' placeholder="Enter quantity available" />
      </Form.Group>

      <Form.Group className='mt-3 mb-3 ' controlId="manufacturer">
        <Form.Label className='fw-bold fs-5' >Manufacturer</Form.Label>
        <Form.Control type="text" style={{ height: '60px' }} className='p-2' placeholder="Enter manufacturer" />
      </Form.Group>

      <Form.Group className='mt-3 mb-3 ' controlId="image">
        <Form.Label className='fw-bold fs-5' >Image</Form.Label>
        <Form.Control type="text" style={{ height: '60px' }}className='p-2' placeholder='Enter Image Link'  />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></div>
    </div>);
}

export default AddItem;