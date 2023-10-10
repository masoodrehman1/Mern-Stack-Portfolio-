import { createSlice } from "@reduxjs/toolkit";
const initialState={name:"",email:"",password:"",skills:{},about:{
    name:"",title:"",description:"",quote:"",avatar:"",
 }}
 const adminDataSlice=createSlice({
    name:"adminData",
    initialState,
    reducers:{
        updateAdminData:(state,action)=>{
           return {...state, ...action.payload}
        }
    }
 })
 export const {updateAdminData}=adminDataSlice.actions
 export const adminDataReducer = adminDataSlice.reducer;

 