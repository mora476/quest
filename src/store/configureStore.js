import { configureStore } from '@reduxjs/toolkit'
import authStore from "./AuthStore";
import registStore from "./RegistStore";

export default configureStore({
    reducer: {
        auth: authStore,
        regist: registStore,
    },
})