import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import productLink from "../../services/productLink";

function UpdateItem() {
    const [info,setInfo]= useState()
    const location = useLocation()
    useEffect(()=>{
        const fetchAll=async()=>{
            const response =(await productLink.getOne(1)).data
            console.log(response.item)
            setInfo(response.item)

        }
        fetchAll()
    },[])
    return (  <div>
        this the update sections
    </div>);
}

export default UpdateItem;