import{configureStore} from "@reduxjs/toolkit"
import userInfo from "../features/details/userInfo"
export const store = configureStore({
    reducer:{
        user:userInfo
    }
})