import { createSlice } from '@reduxjs/toolkit'


export const cartInfo= createSlice({
    name:'carts',
initialState:{

    cart:[]
},
reducers:{

    addCart:(state,action)=>{




         state.cart =action.payload
    }
}
})
export const {addCart} = cartInfo.actions
export const cartin =(state)=> state.user.cart

export default cartInfo.reducer;