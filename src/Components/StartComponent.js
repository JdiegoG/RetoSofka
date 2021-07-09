import { Fragment, useState } from "react";

const StartComponent = ({game, setIsStarted}) => {
    const [playersNumber, setPlayersNumber] = useState(0);
    const [speedwaylength, setSpeedwaylength] = useState(0);

    const startGame = (e) => {
        e.preventDefault()
        game.startgame(playersNumber, speedwaylength);
        setIsStarted("DRIVER-NAMES")
      }

    return(
      <Fragment>
        <label>Ingrese la cantidad de jugadores</label>
        <input type={'number'} value={playersNumber} onChange={(e)=> setPlayersNumber(e.target.value)}></input>
        <br></br>
        <label>Ingrese la distancia de la pista en Km</label>
        <input type={'number'} value={speedwaylength} onChange={(e)=> setSpeedwaylength(e.target.value)}></input>
        <br></br>
        <button onClick={startGame}>Iniciar</button>
      </Fragment>
    )
}   

export default StartComponent