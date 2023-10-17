import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import productLink from "../../services/productLink";
import EachCard from "../../components/Cards/eachcard";
import NewCard from "../../components/Cards/newcard";

function EachPro() {
  const [info, setInfo] = useState();
  const location = useLocation();
  useEffect(() => {
    const getInfo = async () => {
      let response = (await productLink.getOne(location.state.id)).data;
      setInfo(response.item);
    };
    getInfo();
  }, []);
  let product =location.state.e
  console.log(info);
  return (
    <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row py-4 px-2" style={{}}>
    <div className="text-center" style={{width:""}} >        <div  >

            <img src={product?.image} alt="" style={{height:'18em'}} />
        </div>
        <div >
            <div className="fw-bold" style={{color:"#6394F8",fontSize:'1.2em'}}>{product?.product_name}</div>
            <div style={{fontSize:'0.9em',color: '#ff9f1c'}}>{product?.category}</div>
            <div style={{fontSize:'1em'}}>{product?.price}</div>
        </div>



    </div>
    <div className="py-4" style={{maxWidth:"50em",wordSpacing:'4px',color:'black'}}>
        <h4 className="text-center fw-bold" style={{fontSize:'2em'}}>Description</h4>
        <div className='lh-lg px-4' style={{fontSize:'1em'}}>{product?.description}</div>
    </div>

</div>
  );
}

export default EachPro;
