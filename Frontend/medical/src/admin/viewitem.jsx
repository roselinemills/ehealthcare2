import { useEffect, useState } from "react";
import ViewCard from "./eachitem/viewcard";
import productLink from "../services/productLink";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Widjet/spinners";

function ViewItem() {
    const navigate =useNavigate()
    const [info,setInfo]=useState([])
    useEffect(()=>{
        const fetchAll =async()=>{
            let response = (await productLink.getAll()).data
            setInfo(response.items)
        }
        fetchAll()
    },[])

    return ( <div>
        <div>
            {info.length ==0?<div className="d-flex align-items-center py-5 justify-content-center"><Spinner/></div>:
            <div className="d-flex flex-wrap justify-content-center">
                {info.map((e,id)=>(
                 <div key={id}  className="d-flex m-3 justify-content-center cards ">
                <ViewCard product={e}/>
                </div>)) }
            </div>}
        </div>
    </div> );
}

export default ViewItem;