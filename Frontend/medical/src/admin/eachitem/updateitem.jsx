import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import productLink from "../../services/productLink";
import EditInput from "../editng/edititem";

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
        <EditInput product={info}/>
    </div>);
}

export default UpdateItem;