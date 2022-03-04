import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const registStore = createSlice({
    name: 'registStore',
    initialState: {
        t: "",
    },
    reducers: {
        registration: (state,action) => {
            state.t = action.payload
        },
    },
})

export const {registration} = registStore.actions

export default registStore.reducer