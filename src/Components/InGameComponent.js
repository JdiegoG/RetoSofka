import { Fragment, useState } from "react";
import Game from "../Core/Game";

const InGameComponent = ({game, setGame, setIsStarted}) => {
    const [currentTurn, setCurrentTurn] = useState(0);

    const moverse = ()=>{
        const lanzamiento = game.carList[currentTurn].lanzardado()
        game.carList[currentTurn].moverse(lanzamiento, game)
        const isfinished = game.carList.some(item => item.currentposition < game.speedwaylength)
        if(!isfinished){
          setIsStarted("FINISH")
        }
        setGame({...new Game(game)})
        if(currentTurn < (game.carList.length - 1)){
          setCurrentTurn(currentTurn + 1)
        }else{
          setCurrentTurn(0)
        }
      }
    
      const deberialanzar = () =>{
        if(!game.carList[currentTurn].isFinish){
          return (
            <div>
              <h3>{`Turno carrito numero ${currentTurn + 1}`}</h3>
              <button onClick={moverse}>lanzar Dado</button>
            </div>
          )
        }
        else{
          if(currentTurn < (game.carList.length - 1)){
            setCurrentTurn(currentTurn + 1)
          }else{
            setCurrentTurn(0)
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