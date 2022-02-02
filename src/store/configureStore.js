import { configureStore } from '@reduxjs/toolkit'
import authStore from "./AuthStore";

export default configureStore({
    reducer: {
        auth: authStore,
    },
})