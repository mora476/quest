import "./achi.css"
export const CardAchievement = ({image, text,about}) => {

    return (
        <div className={"card"}>
            <img src={image} className={"img2"}/>
            <div className="container">
                <h4><b>{text}</b></h4>
                <p>{about}</p>
            </div>
        </div>
    )
}