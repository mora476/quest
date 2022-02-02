import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./store/counterSlice";

function App() {
    const count = useSelector((state => state.counter.value))
    const dispatch = useDispatch()
    return (
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                +
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                -
            </button>
        </div>
    )
}

export default App;
