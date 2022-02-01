import {useState} from "react";


export const Login=()=>{
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="App">
            <input type={"text"} placeholder={"login"} className={"inpt"} onChange={(event => {
                setLogin(event.target.value)
            })}/>

            <input type={"password"} placeholder={"password"} className={"inpt"} onChange={(event => {
                setPassword(event.target.value)
            })}/>
            <button className={"color"}>
                Войти
            </button>
            {login} {password}
        </div>
    );
}