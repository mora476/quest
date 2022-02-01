import {useState} from "react";


export const Registration=()=>{
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [number, setNumber] = useState("")
    const [group, setGroup] = useState("")
    return (
        <div className="App">
            <input type={"text"} placeholder={"Логин"} className={"inpt"} onChange={(event => {
                setLogin(event.target.value)
            })}/>
            <input type={"text"} placeholder={"Пароль"} className={"inpt"} onChange={(event => {
                setPassword(event.target.value)
            })}/>
            <input type={"text"} placeholder={"Имя"} className={"inpt"} onChange={(event => {
                setName(event.target.value)
            })}/>
            <input type={"text"} placeholder={"Фамилия"} className={"inpt"} onChange={(event => {
                setLastName(event.target.value)
            })}/>
            <input type={"text"} placeholder={"Отчество"} className={"inpt"} onChange={(event => {
                setMiddleName(event.target.value)
            })}/>
            <input type={"text"} placeholder={"Номер телефона"} className={"inpt"} onChange={(event => {
                setNumber(event.target.value)
            })}/>
            <input type={"text"} placeholder={"Группа"} className={"inpt"} onChange={(event => {
                setGroup(event.target.value)
            })}/>
            <button className={"color"}>
                Регистрация
            </button>
        </div>
    );
}


