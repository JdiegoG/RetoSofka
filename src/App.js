import { useState } from 'react';
import './App.css';
import Game from './Core/Game';

const App = () => {
  const [isStarted, setIsStarted] = useState("PRE-START");
  const [playersNumber, setPlayersNumber] = useState(0);
  const [speedwaylength, setSpeedwaylength] = useState(0);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [game, setGame] = useState(new Game());

  const startGame = (e) => {
    e.preventDefault()
    game.startgame(playersNumber, speedwaylength);
    setIsStarted("DRIVER-NAMES")
  }

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

  const getCurrentPage = () =>{
    switch (isStarted) {
      case "PRE-START":
        return (
          <button onClick={() => setIsStarted("START")}>
            start
          </button>
      )
      case "START":
        return (
          <div>
            <label>Ingrese la cantidad de jugadores</label>
            <input type={'number'} value={playersNumber} onChange={(e)=> setPlayersNumber(e.target.value)}></input>
            <br></br>
            <label>Ingrese la distancia de la pista</label>
            <input type={'number'} value={speedwaylength} onChange={(e)=> setSpeedwaylength(e.target.value)}></input>
            <br></br>
            <button onClick={startGame}>Iniciar</button>
          </div>
      )
      case "DRIVER-NAMES":
        return (
          <div>
            {game.carList.map((item,i)=>(
              <div key={i}>
                <label>{`Ingresa el nombre del conductor ${i + 1}`}</label>
                <input value={game.carList[i].driverName} 
                onChange={(e)=> {
                  console.log(e.target.value)
                  game.carList[i].driverName = e.target.value;
                  setGame({...game})
                }}></input>
              </div>
            ))}
            <button onClick={()=> setIsStarted("IN-GAME")}>a jugar</button>
          </div>
      )
      case "IN-GAME":
        console.log(game)
        return (
          <div>
            <h1>Listado de jugadores</h1>
            <div>
              {
                game.carList.map((car, i) =>{
                  console.log(car)
                  return (
                  <div key={i}>
                    <span>{`Carril numero ${i + 1} `}</span>
                    <span>{`carrito de ${car.driverName}`}</span>
                    <span>{`posición en la pista ${car.currentposition * 1000} KM`}</span>
                  </div>
                )})
              }
            </div>
            {deberialanzar()}
          </div>
      )

      case "FINISH":
        return (
          <div>
            <h1>se acabo el juego</h1>
            <span>{`primero ${game.podium[0].driverName}`}</span>
            <br></br>
            <span>{`segundo ${game.podium[1].driverName}`}</span>
            <br></br>
            <span>{`tercero ${game.podium[2].driverName}`}</span>
          </div>
      )
    
      default:
        break;
    }
  }


  return (
    <div className="App">
      {getCurrentPage()}
    </div>
  );
}

export default App;
