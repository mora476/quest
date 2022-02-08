import React, {useState} from "react";
import {Login} from "./Login";
import {Registration} from "./Registration";


export const FormAuth = () => {
    const [isRegist, setIsRegist] = useState(false)

    function mode() {
        return isRegist ? <Login /> : <Registration />
    }

    return (
        <div>
            {mode()}
            <button onClick={()=>setIsRegist(!isRegist)}>{isRegist ? "Регистрация":"Войти?"}</button>
        </div>
    )
}