function NewCard({product}) {


    return (  <div>
        <div className="row">
            <div>
                <img src={product?.image} alt="" />
            </div>
            <div>
                <div>{product?.product_name}</div>
                <div>{product?.category}</div>
                <div>{product?.price}</div>
            </div>
        </div>
        <div>
            <h4>Description</h4>
            <div>{product?.description}</div>
        </div>
    </div>);
}

export default NewCard;