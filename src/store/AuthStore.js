import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const authStore = createSlice({
    name: 'authStore',
    initialState: {
        t: "",
        isAuth: false,
    },
    reducers: {
        authorization: (state,action) => {
            state.t = action.payload
            state.isAuth = true
        },
    },
})

export const { authorization} = authStore.actions

export default authStore.reducer