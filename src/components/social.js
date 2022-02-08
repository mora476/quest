import "./style/social.css"
import {useState} from "react";

export const Social = () => {
    const {q1, setQ1} = useState( "")
    const {q2, setQ2} = useState("")
    const {q3, setQ3} = useState( "")
    const {q4, setQ4} = useState( "")
    const {q5, setQ5} = useState("")
    return (
        <div className={"i1"}>

            <div className={"i2"}>
                <h4>
                    Любимая комп игра?
                </h4>
                <input className={"i3"} onChange={(e)=>setQ1(e.target.value)}/>
            </div>
            <div className={"i2"}>
                <h4>
                    Имя домашнего питомца?
                </h4>
                <input className={"i3"} onChange={(e)=>setQ2(e.target.value)}/>
            </div>
            <div className={"i2"}>
                <h4>
                    Девичья фамилия матери?
                </h4>
                <input className={"i3"} onChange={(e)=>setQ3(e.target.value)}/>
            </div>
            <div className={"i2"}>
                <h4>
                    Номер школы, в которой владелец учился?
                </h4>
                <input className={"i3"} onChange={(e)=>setQ4(e.target.value)}/>
            </div>
            <div className={"i2"}>
                <h4>
                    Первая заработанная сумма на рабочем аккаунте?
                </h4>
                <input className={"i3"} onChange={(e)=>setQ5(e.target.value)}/>
            </div>
            <button>
                Отправить
            </button>
        </div>

    )
}