import axios from "axios";
import React, {useState} from "react";
import "./TestAjax.css"

export const TextAjax = () => {

    const [post, setPost] = useState([])

    function run() {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((e) => {
            setPost(e.data)
        })
    }

    function show() {
        return post.map((it) => {
            return (<div className="message">
                {it.id} message: {it.body}
            </div>)
        })
    }

    return (<div>
        {show()}
        <button onClick={run}>Test</button>
    </div>)
}