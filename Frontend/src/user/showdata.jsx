import { useNavigate } from "react-router-dom";
import ProductCard from "../components/Cards/productcard";
import Spinner from "../components/Widjet/spinners";

function ShowData({addToCart,info,text,selectedCategory}) {
    const navigate=useNavigate()
    // let display = info?.filter(
    //     (info) => info?.product_name.indexOf(text.toLocaleLowerCase()) !== -1
    //   );
    let display = info?.filter((info) => {
        const productNameMatches = info?.product_name.toLowerCase().includes(text.toLowerCase());

        const categoryMatches =
          !selectedCategory || info?.category.toLowerCase() === selectedCategory.toLowerCase();

        return productNameMatches && categoryMatches;
      });
    return ( <div className="d-flex flex-wrap justify-content-center" >
      {info.length == 0 &&<div><Spinner/></div>}
      {(display.length==0 && info.length !==0)&& <div className="py-5" style={{fontSize:'3em'}}> Does Not Exist</div>}
         {display?.map((e,id)=>(

            <div key={id}  className="d-flex m-3 justify-content-center cards " style={{width:"15em",background:''}}>
                <div>
                <div onClick={()=>{navigate('/eachitem',{state:{e}})}} ><ProductCard product={e}/></div>
                <div className=" d-flex justify-content-center"><button className=" py-2 px-3 my-2" style={{backgroundColor:" #6394F8",color:'#fff',border:'none'}} onClick={()=>{addToCart(e)}}><i className="bi bi-cart4"></i> Add to cart</button></div>

                </div>
            </div>
        ))}
    </div>  );
}

export default ShowData;