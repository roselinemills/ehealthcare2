function NewCard({product}) {

    return (  <div className="d-flex justify-content-between align-items-center py-4 px-2" style={{}}>
        <div className="text-center" style={{width:""}} >        <div  >

                <img src={product?.image} alt="" style={{height:'18em'}} />
            </div>
            <div >
                <div className="fw-bold" style={{color:"#6394F8",fontSize:'1.2em'}}>{product?.product_name}</div>
                <div style={{fontSize:'0.9em',color: '#ff9f1c'}}>{product?.category}</div>
                <div style={{fontSize:'1em'}}>{product?.price}</div>
            </div>



        </div>
        <div className="" style={{width:"50em",wordSpacing:'4px',color:'black'}}>
            <h4 className="text-center fw-bold">Description</h4>
            <div className='lh-lg px-4' style={{fontSize:'1em'}}>{product?.description}</div>
        </div>

    </div>);
}

export default NewCard;