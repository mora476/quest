import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {Home} from "./components/Home";
import {useEffect, useState} from "react";
import {FormAuth} from "./components/FormAuth/FormAuth";
import {ScreenAchievement} from "./components/achievement/screenAchievement";
import {NavBar} from "./components/NavBar";
import {Mail} from "./components/Mail";
import {Registration} from "./components/Registration";
import {Login} from "./components/FormAuth/Login";

function App() {
    const token = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const [isAuth,setAuth] = useState(token.isAuth)

   /* useEffect(() => {
        if (!isAuth){
            navigate("/auth")
        }
    },[isAuth])*/

    return (<div  className={'App'}>
            <NavBar/>
            <Routes>
                <Route path="/" element={Home()}/>
                <Route path={"/achievement"} element={ScreenAchievement()}/>
                <Route path={"/email"} element={Mail()}/>
                <Route path="/auth" element={FormAuth()}/>
                <Route path="/Reg" element={Registration()}/>
            </Routes>
            <div className={'html'}></div>
        </div>

    )
}

export default App;
