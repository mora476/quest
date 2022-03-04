import React, {useEffect, useState} from "react";
import {CardAchievement} from "./CardAchievement";
import "./achi.css"
import {useSelector} from "react-redux";
import axios from "axios";
import w from './resource/img.png'
import two from "./resource/2.png"
import three from "./resource/3.png"
import four from "./resource/4.png"
import five from "./resource/5.png"
import six from "./resource/6.png"
let json= [{
    img: two,
    key:"второй, придумать название",
    about:"wewqeq",
    password:"sssg"
},{
    img: three,
    key:"второй, придумать название",
    about:"wewqeq",
    password:"sssg"
},{
    img: four,
    key:"второй, придумать название",
    about:"wewqeq",
    password:"sssg"
},{
    img: five,
    key:"второй, придумать название",
    about:"wewqeq",
    password:"sssg"
},{
    img: six,
    key:"второй, придумать название",
    about:"wewqeq",
    password:"sssg"
}]

export const ScreenAchievement = () => {

    const token = useSelector((state) => state.auth.token)
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get("achievement/received", {
            headers: {'Authorization': 'Bearer ' + token}
        }).then(r => {
            setList(r.data)
        })
    }, [])


    function getNull() {
        return (
            (list.length === 0) ?
                <div className={'Podvodochka'}>
                    <img src={w}/>
                    <h2>Вы еще ничего не открыли</h2>
                </div>
                : <div className={"screen-grid"}>
                    {list.map(value => <CardAchievement key={value.title} image={json.find(js => js.key===value.title).img} text={value.title}
                                                        about={json.find(js => js.key===value.title).about}/>)}
                </div>
        )
    }

    return (
        getNull()
    )
}