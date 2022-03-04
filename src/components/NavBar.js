import {Link, useNavigate} from "react-router-dom";
import "./style/NavBar.css"
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/AuthStore";

export const NavBar = () => {
    const auth = useSelector((state => state.auth.isAuth))
    const disp = useDispatch()
    const navigator = useNavigate()

    function isAuth() {
        return auth ? <nav className={"nav-bar"}>
                <div>
                    <Link className={"linc"} to="/">Главная</Link>
                    <Link to="/achievement" className={"linc"}>Достижения</Link>
                    <Link to="/email" className={"linc"}>Почта</Link>
                    <button className={"logout"} onClick={() => {
                        disp(logout())
                        navigator("/auth")
                    }}>Выйти
                    </button>
                </div>
            </nav>
            : <div/>
    }

    return (
        isAuth()
    )
}