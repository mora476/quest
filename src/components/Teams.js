import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./style/Team.css"
import axios from "axios";
import {logout} from "../store/AuthStore";

export const Teams = () => {
    const token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch()
    const [team, setTeam] = useState({
        name: "Загрузка..", array: []
    })
    useEffect(() => {
        console.log(token)
         axios.get("team", {
             headers: {'Authorization': 'Bearer ' + token}
         }).then((res) => {
             setTeam(res.data)
         })/*.catch(reason => {
             dispatch(logout())
         })*/
     }, [])

    return (<div>
            <div className={"block"}>
            </div>
            <div className={"team-block"}>
                <div className={"team-info"}>
                    <h3> {team.name}</h3>
                </div>
                {team.array.map((v, index) =>
                    <div className={"users i22"} key={index}>
                        <h4>{v.lastName} {v.name} {v.middleName ? v.middleName : ""}</h4>
                        <p>Группа: {v.groupName}</p>
                        <p>Телефон: {v.phone}</p>
                    </div>
                )}
            </div>
        </div>
    )
}