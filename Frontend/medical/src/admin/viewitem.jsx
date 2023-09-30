import { useEffect, useState } from "react";
import ViewCard from "./eachitem/viewcard";
import productLink from "../services/productLink";
import { useNavigate } from "react-router-dom";

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
    console.log(info,"jsadfjslfjaklsjflkajslfasjldfjalskf")
    return ( <div>
        <div>
            <div className="row">
                {info.map((e,id)=>(
                 <div key={id}  className="col-md-4 mb-5">
                <ViewCard product={e}/>
                </div>)) }
            </div>
        </div>
    </div> );
}

export default ViewItem;