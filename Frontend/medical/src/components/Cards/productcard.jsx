import Card from 'react-bootstrap/Card';


function ProductCard({product}) {
  const { product_name, description, category, price, quantity_available, manufacturer, image } = product;

  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={image} alt={product_name} />
      <Card.Body>
        <Card.Title>{product_name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Category: {category}</Card.Text>
        <Card.Text>Price: ${price}</Card.Text>
        <Card.Text>Quantity Available: {quantity_available}</Card.Text>
        <Card.Text>Manufacturer: {manufacturer}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;