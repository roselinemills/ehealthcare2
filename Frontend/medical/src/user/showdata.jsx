import { useNavigate } from "react-router-dom";
import ProductCard from "../components/Cards/productcard";

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
    return ( <div>
         {display?.map((e,id)=>(
            <div key={id} className="col-md-4 mb-5">
                <div onClick={()=>{navigate('eachitem',{state:{id:info?.id}})}} ><ProductCard product={e}/></div>
                <div><button onClick={()=>{addToCart(e)}}>Add to cart</button></div>
            </div>
        ))}
    </div>  );
}

export default ShowData;