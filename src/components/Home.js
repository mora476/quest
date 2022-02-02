import React from "react";
import {useSelector} from "react-redux";


export const Home = ()=>{
    const auth = useSelector((state) => state.auth)


    return(
        <div>
            {auth.isAuth.toString()}
        </div>
    )
}