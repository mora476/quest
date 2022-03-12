import React, {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import "./style/Mail.css"
import {Link} from "react-router-dom";

let arrayMail = [{
    id: 0,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ducimus hic natus nostrum sunt! Dicta\n" +
        "                ipsam quae ratione. Commodi natus nemo suscipit! Aspernatur consequuntur cupiditate dolores, eius\n" +
        "                eligendi exercitationem fuga harum itaque maxime, mollitia natus perferendis repellendus similique vitae\n" +
        "                voluptate.",
    login: "anim228",
    event: (password, token) => {
        axios.get("event/check?code=" + password, {
            headers: {'Authorization': 'Bearer ' + token}
        }).then(e => {
            if (e.data === false)
                alert("Ответ не верный")
        })
    }
}, {
    id: 1,
    text: (<div>
        Рад что мы поняли друг друга, держи
        <Link to={"/test"}> Сайт</Link>
    </div>),
    login: "anim228",
    event: (password, token) => {
        axios.get("event/check?code=" + password, {
            headers: {'Authorization': 'Bearer ' + token}
        }).then(e => {
            if (e.data === false)
                alert("Ответ не верный")
        })
    }
},
    {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ducimus hic natus nostrum sunt! Dicta\n" +
            "                ipsam quae ratione. Commodi natus nemo suscipit! Aspernatur consequuntur cupiditate dolores, eius\n" +
            "                eligendi exercitationem fuga harum itaque maxime, mollitia natus perferendis repellendus similique vitae\n" +
            "                voluptate.",
        login: "awdac",
        event: (password, token) => {
            axios.get("event/check?code=" + password, {
                headers: {'Authorization': 'Bearer ' + token}
            }).then(e => {
                if (e.data === false)
                    alert("Ответ не верный")
            })
        }
    }
]

/*lorem */

export const Mail = () => {
    const token = useSelector((state) => state.auth.token)
    const [eventID, setEventID] = useState(2)

    useEffect(() => {
        axios.get("event", {
            headers: {'Authorization': 'Bearer ' + token}
        }).then((e) => {
            setEventID(e.data.length)
        })
    }, [])


    function getMassage() {
        let res = arrayMail.find((it) => it.id === eventID)

        return eventID < 0 ?
            <div>писем нет</div> :
            <OneMail text={res.text} event={res.event} eventID={eventID} id={res.id} login={res.login}/>
        /*arrayMail.filter((it) => it.id <= eventID).map((it) =>
            <OneMail text={it.text} event={it.event} eventID={eventID} id={it.id} login={it.login}/>
        )*/
    }

    return (
        <div>
            {getMassage()}
        </div>
    )
}

export const OneMail = ({id, eventID, text, login, event}) => {

    const [answer, setAnswer] = useState("")
    const token = useSelector((state) => state.auth.token)
    return (
        <div className={id !== eventID ? "mail-disable" : "mail"} key={id}>
            <div><h2>{login}</h2></div>
            {text}
            <div>
                <input className={'FUCK'} disabled={id !== eventID} onChange={e => {
                    setAnswer(e.target.value)
                }}/>
                <button className={'FUCK'} disabled={id !== eventID} onClick={() => event(answer, token)}>Ответить
                </button>
            </div>
        </div>
    )
}