import { useState } from 'react';
import './App.css';
import Game from './Core/Game';

const App = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [playersNumber, setPlayersNumber] = useState(0);
  const [speedwaylength, setSpeedwaylength] = useState(0);

  const game = new Game();

  const startGame = () => {
    game.startgame(playersNumber, speedwaylength);
    console.log(game);
    debugger
  }


  return (
    <div className="App">
      {
        isStarted 
        ? (
          <form>
            <label>Ingrese la cantidad de jugadores</label>
            <input type={'number'} value={playersNumber} onChange={(e)=> setPlayersNumber(e.target.value)}></input>
            <br></br>
            <label>Ingrese la distancia de la pista</label>
            <input type={'number'} value={speedwaylength} onChange={(e)=> setSpeedwaylength(e.target.value)}></input>
            <br></br>
            <button onClick={startGame}>Iniciar</button>
          </form>
        )
        : (
          <button onClick={() => setIsStarted(true)}>
            start
          </button>
        )
      }
    </div>
  );
}

export default App;
