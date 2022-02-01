import {useState} from "react";
import {Registration} from "./aaa";
import {Login} from "./Login";


export const MenuAuth=()=>{
    const [flag, setFlag] = useState(true)
    //let flag = false

    return(<div>
        {(!flag) ? 1 : 2}
        <button onClick={()=>{
            setFlag(!flag)// =!flag
        }}>
        Войти?
        </button>
    </div>)
}




