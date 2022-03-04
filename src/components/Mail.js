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
    event: () => {
    }
}, {
    id: 1,
    text: (<div>
        Рад что мы поняли друг друга, держи
        <Link to={"/test"}> Сайт</Link>
    </div>),
    login: "anim228",
    event: () => {
    }
},
    {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ducimus hic natus nostrum sunt! Dicta\n" +
            "                ipsam quae ratione. Commodi natus nemo suscipit! Aspernatur consequuntur cupiditate dolores, eius\n" +
            "                eligendi exercitationem fuga harum itaque maxime, mollitia natus perferendis repellendus similique vitae\n" +
            "                voluptate.",
        login: "awdac",
        event: () => {
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
        console.log(eventID)
        return eventID < 0 ?
            <div>писем нет</div> :
            arrayMail.filter((it) => it.id <= eventID).map((it) =>
                <div className={it.id !== eventID ? "mail-disable" : "mail"} key={it.id}>
                    <div><h2>{it.login}</h2></div>
                    {it.text}
                    <div>
                        <input className={'FUCK'} disabled={it.id !== eventID}/>
                        <button className={'FUCK'} disabled={it.id !== eventID} onClick={it.event}>Ответить</button>
                    </div>
                </div>
            )
    }

    return (
        <div>
            {getMassage()}
        </div>
    )
}