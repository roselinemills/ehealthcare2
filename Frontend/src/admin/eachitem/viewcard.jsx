
import ProductCard from '../../components/Cards/productcard';
import productLink from '../../services/productLink';
import { useNavigate } from 'react-router-dom';

function ViewCard({product}) {
  const navigate = useNavigate()
  let e = product

   return ( <div>

<div onClick={()=>{navigate('',{state:{e}})}} >
    <ProductCard product={product}/>
</div>
        <div className="d-flex  justify-content-between  py-3 px-2" style={{width:"14em"}}>
        <div className=''>
          <button className='aviewbtn btn ' style={{fontSize:'0.9em',border:'1px solid #006400', color:'#006400'}}  onClick={()=>{navigate('edit',{state:{e}})}} >
            Edit
          </button>
        </div>
        <div>
          <button className='btn aviewbtn' style={{fontSize:'0.9em',border:'1px solid #b40603', color:'#b40603' }}  onClick={async()=>{await productLink.getdelete(e.id)
          location.reload()}}>
            <i className="bi bi-trash3"></i>
          </button>
        </div>

      </div>

    </div> );
}

export default ViewCard;