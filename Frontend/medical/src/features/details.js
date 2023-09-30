import { createSlice } from '@reduxjs/toolkit'

export const userInfo= createSlice({
    name:'users',
initialState:{
    user:null,
    logged:false,
    token:null,
    admin:null,
    alog:false
},
reducers:{
    login:(state,action)=>{
        state.user =action.payload

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
    }
}
})

export const {login,logout,setTokens,logged} = userInfo.actions
export const selectUser =(state)=>state.user.user
export const loggin =(state)=> state.user.logged
export const selectAdmin =(state)=>state.user.admin
export const logginA =(state)=> state.user.alog

export default userInfo.reducer;