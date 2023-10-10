import {createReducer} from "@reduxjs/toolkit"

const initialState={
    loading:true
}
export const userReducer= createReducer(initialState,{
    "GET_USER_REQUEST":(state)=>{
        state.loading=true
    },
    "GET_USER_SUCCESS":(state, action)=>{
        state.loading=false
        state.user=action.payload
    },
    "GET_USER_FAILURE":(state, action)=>{
        state.loading=false;
        state.error=action.payload
    }

})