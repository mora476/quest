import "./style/UBot.css"

export const UBot = () => {

    function test() {
        alert("ты что пидор ?")
    }

    return (
        <div className={"ubot"}>
            <h3>Найдите настоящую мужскую дружбу!</h3>
            <div className={"row"}>
                <img className={"imgY"} onClick={test} src={"https://animegid.online/assets/img-t/yaoi-min.jpg"}
                     alt={1}/>
                <img className={"imgY"} onClick={test} src={"https://animegid.online/assets/img-t/yaoi-min.jpg"}
                     alt={2}/>
                <img className={"imgY"} src={"https://animegid.online/assets/img-t/yaoi-min.jpg"} alt={3}/>
            </div>
            <div className={"row"}>
                <img className={"imgY"} onClick={test} src={"https://animegid.online/assets/img-t/yaoi-min.jpg"}
                     alt={4}/>
                <img className={"imgY"} onClick={test} src={"https://animegid.online/assets/img-t/yaoi-min.jpg"}
                     alt={5}/>
                <img className={"imgY"} onClick={test} src={"https://animegid.online/assets/img-t/yaoi-min.jpg"}
                     alt={6}/>
            </div>
            <div className={"row"}>
                <img className={"imgY"} onClick={test} src={"https://animegid.online/assets/img-t/yaoi-min.jpg"}
                     alt={7}/>
                <img className={"imgY"} onClick={test} src={"https://animegid.online/assets/img-t/yaoi-min.jpg"}
                     alt={8}/>
                <img className={"imgY"} onClick={test} src={"https://animegid.online/assets/img-t/yaoi-min.jpg"}
                     alt={9}/>
            </div>
        </div>
    )
}