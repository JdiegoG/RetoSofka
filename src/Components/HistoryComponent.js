import { Fragment, useEffect, useState } from "react"
import GameService from "../Service/Api/GameService"

const HistoryComponent = () => {
    const [gameLis, setGameLis] = useState(null)

    const getGameList = ()=>{
        GameService.getGames().then(data=>{
            setGameLis(data)
        })
    }

    useEffect(() => {
        getGameList()
    }, [])

    return(
        <Fragment>
            <h3>Resultados anteriores</h3>
            {
                gameLis ?
                gameLis.map((game, i)=>(
                    <div key={i}>
                        <span> <b>1ro</b>{` ${game.podium[0] ? game.podium[0].driverName : ""} `}</span>
                        <span><b>2do</b> {` ${game.podium[1] ?  game.podium[1].driverName : ""} ` }</span>
                        <span><b>3ro</b> {` ${game.podium[2] ? game.podium[2].driverName : ""}`}</span>
                    </div>
                ))
                : <span>Cargando...</span>
            }
        </Fragment>
    )
}

export default HistoryComponent