import "./style/social.css"

export const Social = () => {
    return (
        <div className={"i1"}>
            <div className={"i2"}>
                <h4>
                    Любимая комп игра?
                </h4>
                <input className={"i3"}/>
            </div>
            <div className={"i2"}>
                <h4>
                    Имя домашнего питомца?
                </h4>
                <input className={"i3"}/>
            </div>
            <div className={"i2"}>
                <h4>
                    Девичья фамилия матери?
                </h4>
                <input className={"i3"}/>
            </div>
            <div className={"i2"}>
                <h4>
                    Номер школы, в которой владелец учился?
                </h4>
                <input className={"i3"}/>
            </div>
            <div className={"i2"}>
                <h4>
                    Первая заработанная сумма на рабочем аккаунте?
                </h4>
                <input className={"i3"}/>
            </div>
            <button>
                Отправить
            </button>
        </div>

    )
}