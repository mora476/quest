import { createSlice } from '@reduxjs/toolkit'


const authStore = createSlice({
    name: 'authStore',
    initialState: {
        token: localStorage.getItem("token"),
        isAuth: true//!!localStorage.getItem("token"),
    },
    reducers: {
        authorization: (state,action) => {
            state.token = action.payload
            state.isAuth = true
            localStorage.setItem("token", action.payload)
        },
        logout:(state)=>{
            localStorage.removeItem("token")
            state.token = ""
            state.isAuth = false
        }
    },
})

export const { authorization,logout} = authStore.actions

export default authStore.reducer