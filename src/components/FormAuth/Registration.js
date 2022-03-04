import React, {useState} from "react";

export const Registration = (props) => {

    const [listStudent,setStudent]=useState([])
    const [lastName,setLastName] = useState("")


    function getElement(index, {lastName}){
        return (<div key={index}>
            {index+1}) {lastName}
        </div>)
    }

    return (
        <div>
            {listStudent.map((value,index) => getElement(index,value))}
            <input placeholder={"Фамилия"} onChange={(e)=>setLastName(e.target.value)}/>
            <input placeholder={"Имя"}/>
            <input placeholder={"Отчество"}/>
            <button onClick={()=>{
                setStudent([...listStudent,{
                    lastName:lastName
                }])
            }}>
                Добавить участника
            </button>
        </div>
    )
}