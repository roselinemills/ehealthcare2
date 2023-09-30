function NewCard({product}) {
console.log(product)
    return (  <div className="d-flex justify-content-center pt-8 px-5">
        <div>        <div  >
            <div>
                <img src={product?.image} alt="" />
            </div>
            <div>
                <div>{product?.product_name}</div>
                <div>{product?.category}</div>
                <div>{product?.price}</div>
            </div>
        </div>
        <div className="justify-content-center">
            <h4>Description</h4>
            <div>{product?.description}</div>
        </div>
        </div>

    </div>);
}

export default NewCard;