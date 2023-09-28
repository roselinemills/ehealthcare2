import { useLocation } from "react-router-dom";
import ProductCard from "../../components/Cards/productcard";
import { useEffect } from "react";
import productLink from "../../services/productLink";

function EachPro() {
    const location = useLocation()
    useEffect(()=>{
        const getInfo=async()=>{
            let response=await productLink.getOne(location.state.id)
            console.log(response)
        }
        getInfo()
    },[location])
    console.log(location.state.id)
    return ( <div>
        commmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
    {location.state.id}
        {/* <ProductCard/> */}
    </div> );
}

export default EachPro;