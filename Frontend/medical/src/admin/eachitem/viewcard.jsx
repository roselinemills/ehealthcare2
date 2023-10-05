
import ProductCard from '../../components/Cards/productcard';
import productLink from '../../services/productLink';
import { useNavigate } from 'react-router-dom';

function ViewCard({product}) {
  const navigate = useNavigate()
  let e = product
  console.log(navigate)
   return ( <div>

<div onClick={()=>{navigate('each',{state:{e}})}} >
    <ProductCard product={product}/>
</div>
        <div className="d-flex  justify-content-between  py-3 px-2" style={{width:"14em"}}>
        <div className=''>
          <button className='aviewbtn btn ' style={{fontSize:'0.9em',border:'1px solid #006400', color:'#006400'}}  onClick={()=>{navigate('edit',{state:{id:1}})}} >
            Edit
          </button>
        </div>
        <div>
          <button className='btn aviewbtn' style={{fontSize:'0.9em',border:'1px solid #b40603', color:'#b40603' }}  onClick={async()=>{await productLink.getdelete(1)}}>
            Delete
          </button>
        </div>

      </div>

    </div> );
}

export default ViewCard;