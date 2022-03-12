import React, {useState} from "react";
import {registration} from "../store/RegistStore";
import axios from "axios";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import "./style/Regist.css"

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
            login: KommandName,
            password: Password,
            array: Member
        })
        return res.data
    }

    function Spisok() {
        if (LN.length > 0 && Tel.length > 0 && MN.length > 0) {
            return (
                setMember([...Member, {lastName: LN, name: Name, middleName: MN, phone: Tel, groupName: GR,isCaptain: false}])
            )
        }
        return
    }

    return (
        <div>
            {choise()}
        </div>
    )

    function FFF() {
        return (
            <div className={'FFF'}>
                <div className={'A'}>
                    <div><input className={"inputT"}
                                type={"text"}
                                placeholder={"Введите фамилию"}
                                onChange={(event) => {
                                    LN = event.target.value
                                }}/></div>
                    <div><input className={"inputT"}
                                type={"text"}
                                placeholder={"Введите имя"}
                                onChange={(event) => {
                                    Name = event.target.value
                                }}/></div>
                    <div><input className={"inputT"}
                                type={"text"}
                                placeholder={"Введите отчество"}
                                onChange={(event) => {
                                    MN = event.target.value
                                }}/></div>
                    <div><input className={"inputT"}
                                type={"text"}
                                placeholder={"Введите номер телефона"}
                                onChange={(event) => {
                                    Tel = event.target.value
                                }}/></div>
                    <div><input className={"inputT"}
                                type={"text"}
                                placeholder={"Введите группу"}
                                onChange={(event) => {
                                    GR = event.target.value
                                }}/></div>

                    <button className={'inputTTT'}
                            onClick={Spisok}>
                        Добавить участника
                    </button>
                </div>

                <div className={'B'}>
                    <div className={'Ramka'}>

                        <div>
                            состав команды{KommandName}:
                            <div className={'Probel'}></div>
                            <div> {Member.map((reptile, index) => <li
                                key={index}>{reptile.lastName} {reptile.name} {" "}
                                {reptile.middleName} {reptile.groupName} {reptile.phone}</li>)} </div>
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

    function KKK() {
        return (
            <>
                <div className={'FKK'}>
                    <div><input className={"inputT"}
                                type={"text"}
                                placeholder={"Введите название команды"}
                                onChange={(event => {
                                    setKommandName(event.target.value)
                                })}/></div>

                    <div><input className={"inputT"}
                                type={"text"}
                                placeholder={"Введите пароль"}
                                onChange={(event) => {
                                    Password = event.target.value
                                }}/></div>

                    <button className={"inputTTT"}
                            onClick={async () => {
                               /* if (Password > 0 && KommandName > 0 && Member.filter((it) => (
                                    it.isCaptain === true
                                )).length === 1) {*/
                                    console.log(KommandName + " " + Tel + " " + GR + " " + Password + " " + LN + " " + MN
                                        + " " + Name)
                                    dispatch(registration((await test(KommandName, Password, LN, Name, MN, Tel, GR))))
                                    navigate("/Reg")
                                }
                            }/*}*/>
                        Regist
                    </button>
                </div>
            </>
        )
    }

}