import { Fragment } from "react"

const FinishComponent = ({game}) => {
    return (
        <Fragment>
          <h1>Se acabó el juego</h1>
          <span>{`Primero ${game.podium[0].driverName}`}</span>
          <br></br>
          <span>{`Segundo ${game.podium[1].driverName}`}</span>
          <br></br>
          <span>{`Tercero ${game.podium[2].driverName}`}</span>
        </Fragment>
    )
}

export default FinishComponent