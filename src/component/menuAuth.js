import {useState} from "react";
import {Registration} from "./registration";
import {Login} from "../Login";


export const MenuAuth=(props)=>{
    const [flag, setFlag] = useState(true)

    const test=()=>{
        return (!flag) ? <Registration/> : <Login/>
    }

    return(<div>
        {test()}
        <button onClick={()=>{
            setFlag(!flag)
        }}>
            {props.IS}
        </button>
        {props.children}
    </div>)
}




