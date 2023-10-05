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
  console.log(info);
  return (
    <div>
      Maddmr
      {/* <NewCard product={info} /> */}
    </div>
  );
}

export default EachPro;
