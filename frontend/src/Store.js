import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./Reducers/user";

const store = configureStore({
    reducer:{
        user:userReducer

    }
})
export default store;