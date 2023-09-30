import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import productLink from "../services/productLink";
import NewCard from "../components/Cards/newcard";

function ViewItems() {
    const [info, setInfo] = useState();
    const location = useLocation();
    let product =location.state.e
    useEffect(() => {
      const getInfo = async () => {
        let response = (await productLink.getOne(location.state.id)).data;
        setInfo(response.item);
      };
      getInfo();
    }, []);
    return (  <div>

<NewCard product={product}/>
    </div>);
}

export default ViewItems;