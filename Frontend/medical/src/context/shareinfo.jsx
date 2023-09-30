import { createContext } from "react";
import PropTypes from 'prop-types'
import UserLanding from "../user/landing";

export const CartContexts =createContext()
const Main=({children})=>{
    const value ='jJJJJJ'
    return(
    <CartContexts.Provider values={value}>
            {children}
        </CartContexts.Provider>
    )
}
CartContexts.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Main