import { Fragment, useEffect, useState } from "react";
import Car from "../Core/Car";
import Game from "../Core/Game";
import GameService from "../Service/Api/GameService";

const InGameComponent = ({game, setGame, setIsStarted}) => {
    const [currentTurn, setCurrentTurn] = useState(0);

    useEffect(() => {
      const localTurn = localStorage.getItem("localTurn")
      if(localTurn){
        setCurrentTurn(parseInt(localTurn))
      }
    }, [])

    const moverse = ()=>{
        game.carList[currentTurn] = new Car(game.carList[currentTurn])
        const lanzamiento = game.carList[currentTurn].lanzardado()
        game.carList[currentTurn].moverse(lanzamiento, game)
        const isfinished = game.carList.some(item => item.currentposition < game.speedwaylength)
        if(!isfinished){
          GameService.createGame(game)
          setIsStarted("FINISH")
        }
        setGame({...new Game(game)})
        localStorage.setItem("currentGame", JSON.stringify(game))
        if(currentTurn < (game.carList.length - 1)){
          setCurrentTurn(currentTurn + 1)
          localStorage.setItem("localTurn", currentTurn + 1)
        }else{
          setCurrentTurn(0)
          localStorage.setItem("localTurn", 0)
        }
      }
    
      const deberialanzar = () =>{
        if(!game.carList[currentTurn].isFinish){
          console.log("si")
          return (
            <div>
              <h3>{`Turno carrito numero ${currentTurn + 1}`}</h3>
              <button onClick={moverse}>lanzar Dado</button>
            </div>
          )
        }
        else{
          console.log("else")
          if(currentTurn < (game.carList.length - 1)){
            setCurrentTurn(currentTurn + 1)
            localStorage.setItem("localTurn", currentTurn + 1)
          }else{
            setCurrentTurn(0)
            localStorage.setItem("localTurn", 0)
          }
        }
      }

    return(
        <Fragment>
            <h1>Listado de jugadores</h1>
            <div>
            {
                game.carList.map((car, i) =>{
                return (
                <div key={i}>
                    <span>{`Carril numero ${i + 1} `}</span>
                    <span>{`carrito de ${car.driverName}`}</span>
                    <span>{` Recorrido ${car.currentposition * 100} M`}</span>
                </div>
                )})
            }
            </div>
            {deberialanzar()}
        </Fragment>
    )
}

export default InGameComponent