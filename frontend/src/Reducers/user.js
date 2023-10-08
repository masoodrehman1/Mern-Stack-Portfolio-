import {createReducer} from "@reduxjs/toolkit"

const initialState={
    loading:true,
    user: null,
    error: null,
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
    },
     "CLEAR_ERRORS":(state)=>{
        state.error=null
    },
    
    "CLEAR_MESSAGES":(state)=>{
        state.message=null
    }

})
export const loginReducer= createReducer({},{
    "LOGIN_REQUEST":(state)=>{
        state.loading=true
        state.isauthenticated=false
    },
    "LOGIN_SUCCESS":(state, action)=>{
        state.loading=false
        state.isauthenticated=true
        state.message=action.payload
    },
    "LOGIN_FAILURE":(state, action)=>{
        state.loading=false;
        state.isauthenticated=false
        state.error=action.payload
    },
    "LOAD_USER_REQUEST":(state)=>{
        state.loading=true
        state.isauthenticated=false
    },
    "LOAD_USER_SUCCESS":(state, action)=>{
        state.loading=false
        state.isauthenticated=true
        state.user=action.payload
    },
    "LOAD_USER_FAILURE":(state, action)=>{
        state.loading=false;
        state.isauthenticated=false
        state.error=action.payload
    },
    "LOGOUT_REQUEST":(state)=>{
        state.loading=true
    },
    "LOGOUT_SUCCESS":(state, action)=>{
        state.loading=false
        state.isauthenticated=false
        state.user=null
        state.message=action.payload
    },
    "LOGOUT_FAILURE":(state, action)=>{
        state.loading=false;
        state.isauthenticated=true
        state.error=action.payload
    },
    "CLEAR_ERRORS":(state)=>{
        state.error=null
    },
    
    "CLEAR_MESSAGES":(state)=>{
        state.message=null
    }

})
export const updateReducer= createReducer({},{
    "UPDATE_USER_REQUEST":(state)=>{
        state.loading=true
    },
    "UPDATE_USER_SUCCESS":(state, action)=>{
        state.loading=false
        state.message=action.payload
    },
    "UPDATE_USER_FAILURE":(state, action)=>{
        state.loading=false;
        state.error=action.payload
    },
    "ADD_TIMELINE_REQUEST":(state)=>{
        state.loading=true
    },
    "ADD_TIMELINE_SUCCESS":(state, action)=>{
        state.loading=false
        state.message=action.payload
    },
    "ADD_TIMELINE_FAILURE":(state, action)=>{
        state.loading=false;
        state.error=action.payload
    },
    "DELETE_TIMELINE_REQUEST":(state)=>{
        state.loading=true
    },
    "DELETE_TIMELINE_SUCCESS":(state, action)=>{
        state.loading=false
        state.message=action.payload
    },
    "DELETE_TIMELINE_FAILURE":(state, action)=>{
        state.loading=false;
        state.error=action.payload
    },
    "ADD_PROJECT_REQUEST":(state)=>{
        state.loading=true
    },
    "ADD_PROJECT_SUCCESS":(state, action)=>{
        console.log(action)
        state.loading=false
        state.message=action.payload
    },
    "ADD_PROJECT_FAILURE":(state, action)=>{
        state.loading=false;
        state.error=action.payload
    },
    "DELETE_PROJECT_REQUEST":(state)=>{
        state.loading=true
    },
    "DELETE_PROJECT_SUCCESS":(state, action)=>{
        state.loading=false
        state.message=action.payload
    },
    "DELETE_PROJECT_FAILURE":(state, action)=>{
        state.loading=false;
        state.error=action.payload
    },
     "CLEAR_ERRORS":(state)=>{
        state.error=null
    },
    
    "CLEAR_MESSAGES":(state)=>{
        state.message=null
    }

})