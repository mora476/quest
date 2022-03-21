import React from "react";
import {useState} from "react";
import {registration} from "../store/RegistStore";
import axios from "axios";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import "./style/Regist.css"
import {FormAuth} from "./FormAuth/FormAuth";

export const Registration = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    let Name
    let LN
    let MN
    let Tel
    let GR
    let Password
    const [KommandName, setKommandName] = useState('')
    const [Member, setMember] = useState([])
    const [flag, setFlag] = useState(true)

    const choise = () => {
        return (!flag) ? KKK() : FFF()
    }

    async function test(KommandName, password, Name, Tel) {
        let res = await axios.post("/auth/registration", {
            login: KommandName, password: Password, lastname: LN,
            name: Name, middlename: MN, phone: Tel, groupName: GR
        })
        return res.data
    }

    function Spisok() {
        if (LN.length > 0 && Tel.length>0 && MN.length>0){
            return (
                setMember([...Member, {lastname: LN, name: Name, middlename: MN, phone: Tel, groupName: GR}])
            )
        }
        return
    }

return(
    <div>
        {choise()}
    </div>
)
    function FFF (){
        return (
            <div className={'FFF'}>
                <div className={'A'}>
                <div><input className={"inputT"}
                            type={"text"}
                            placeholder={"Введите фамилию"}
                            onChange={(event) => {LN=event.target.value}}/></div>
                <div><input className={"inputT"}
                            type={"text"}
                            placeholder={"Введите имя"}
                            onChange={(event) => {Name=event.target.value}}/></div>
                <div><input className={"inputT"}
                            type={"text"}
                            placeholder={"Введите отчество"}
                            onChange={(event) => {MN=event.target.value}}/></div>
                <div><input className={"inputT"}
                            type={"text"}
                            placeholder={"Введите номер телефона"}
                            onChange={(event) => {Tel=event.target.value}}/></div>
                <div><input className={"inputT"}
                            type={"text"}
                            placeholder={"Введите группу"}
                            onChange={(event) => {GR=event.target.value}}/></div>

                <button className={'inputTTT'}
                        onClick = {Spisok}>
                    Добавить участника
                </button>
                </div>

                <div className={'B'}>
                    <div className={'Ramka'}>

                <div>
                    состав команды{KommandName}:
                    <div className={'Probel'}></div>
                    <div> {Member.map((reptile, index) => <li key={index}>{reptile.lastname} {reptile.name} {" "}
                        {reptile.middlename} {reptile.groupName} {reptile.phone}</li>)} </div>
                </div>

                    <button className={"inputTTT"} onClick={() => {
                        setFlag(!flag)
                    }}>
                        Продолжить регистрацию
                    </button>
                </div>
                </div>
                </div>
        )
    }

    function KKK (){
    return(
        <>
            <div className={'FKK'}>
                <div className={'oblastt'}>
                <div><input className={"inputT"}
                            type={"text"}
                            placeholder={"Введите название команды"}
                            onChange={(event => {setKommandName(event.target.value)})}/></div>

                <div><input className={"inputT"}
                            type={"text"}
                            placeholder={"Введите пароль"}
                            onChange={(event) => {Password=event.target.value}}/></div>

                <button className={"inputTTT"}
                        onClick={async () => {
                            if (Password>0 && KommandName>0 && Member.filter((it)=>(
                                it.isCaptain === true
                            )).length === 1)
                            {
                                console.log(KommandName + " " + Tel +  " " + GR + " " + Password + " " + LN + " "+ MN
                                    + " " + Name)
                                dispatch(registration((await test(KommandName, Password, LN, Name, MN, Tel, GR))))
                                navigate("/Reg")
                            }
                        }}>
                    Regist
                </button>
                </div>
                </div>
        </>
    )
}

}