import { createSlice } from '@reduxjs/toolkit'

export const userInfo= createSlice({
    name:'users',
initialState:{
    user:null,
    logged:false,
    token:null,
    admin:null,
    alog:false,
    cart:[]
},
reducers:{
    login:(state,action)=>{
        state.user =action.payload
        state.logged=true

    },
    setTokens:(state,action)=>{
        state.logged=true
        state.token=action.payload
    },
    logout:(state,action)=>{
        state.user =action.payload
        state.logged=false
        state.token=action.payload
    },
    alogout:(state,action)=>{
        state.admin =action.payload
        state.alog=false

    },
    alogin:(state,action)=>{
        state.admin =action.payload
        state.alog=true
    },
    addCart:(state,action)=>{
        // const isItemInCart = state.cart.find((cartItem) => cartItem.id === action.payload.id);

        // if (isItemInCart) {
        //   state.cart =state.cart.map((cartItem) =>
        //       cartItem.id === action.payload.id
        //         ? { ...cartItem, quantity: cartItem.quantity + 1 }
        //         : cartItem
        //     )

        // } else {
        //   state.cart.push( { ...action.payload, quantity: 1 });
        // }



         state.cart =action.payload
    }
}
})

export const {login,logout,setTokens,logged,addCart,alogin,alogout} = userInfo.actions
export const selectUser =(state)=>state.user.user
export const loggin =(state)=> state.user.logged
export const selectAdmin =(state)=>state.user.admin
export const logginA =(state)=> state.user.alog
export const cartin =(state)=> state.user.cart

export default userInfo.reducer;