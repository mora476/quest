import React from "react";
import {authorization} from "../store/AuthStore";
import axios from "axios";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import "./style/Login.css"

export const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    let login
    let password

    async function test(login, password) {
        let res = await axios.post("/auth/login", {login: login, password: password})
        return res.data
    }

    return (
        <div className={"mainMenu"}>
            <div className={"menu"}>

                <input className={"inputT"} type={"text"} placeholder={"Login"} onChange={(e) => {
                    login = e.target.value
                }}/>

                <input className={"inputT"} type={"password"} placeholder={"password"} onChange={(e) => {
                    password = e.target.value
                }}/>

                <button className={"inputT"} onClick={async () => {
                    console.log(login + " " + password)
                    dispatch(authorization((await test(login, password))))
                    navigate("/")
                }}>
                    Auth
                </button>
            </div>
        </div>
    )
}