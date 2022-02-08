import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {authorization} from "./store/AuthStore";
import axios from "axios";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {Login} from "./components/Login";
import {Home} from "./components/Home";
import {useEffect, useState} from "react";
import {Registration} from "./components/Registration";

function App() {
    const token = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const [isAuth,setAuth] = useState(token.isAuth)

    useEffect(() => {
        if (!isAuth){
            navigate("/Reg")
        }
    },[isAuth])

    return (<div>
            <Routes>
                <Route path="/" element={Home()}/>
                <Route path="/auth" element={Login()}/>
                <Route path="/Reg" element={Registration()}/>
            </Routes>
        </div>
    )
}

export default App;
