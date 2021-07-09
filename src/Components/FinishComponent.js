import { Fragment, useEffect } from "react"

const FinishComponent = ({game}) => {
  useEffect(() => {
    localStorage.removeItem("localTurn")
    localStorage.removeItem("currentGame")
  }, [])
    return (
        <Fragment>
          <h1>Se acabó el juego</h1>
          <span>{`Primero ${game.podium[0] ? game.podium[0].driverName : ""}`}</span>
          <br></br>
          <span>{`Segundo ${game.podium[1] ?  game.podium[1].driverName : ""}` }</span>
          <br></br>
          <span>{`Tercero ${game.podium[2] ? game.podium[2].driverName : ""}`}</span>
        </Fragment>
    )
}

export default FinishComponent