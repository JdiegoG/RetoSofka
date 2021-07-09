import { useEffect, useState } from 'react';
import './App.css';
import DriverNamesComponent from './Components/DriverNamesComponent';
import FinishComponent from './Components/FinishComponent';
import HistoryComponent from './Components/HistoryComponent';
import InGameComponent from './Components/InGameComponent';
import PreStartComponent from './Components/PreStartComponent';
import StartComponent from './Components/StartComponent';
import Game from './Core/Game';

const App = () => {
  const [isStarted, setIsStarted] = useState("PRE-START");
  const [game, setGame] = useState(new Game());

  useEffect(() => {
    const currentGame = localStorage.getItem("currentGame")
    if(currentGame){
      setGame({...JSON.parse(currentGame)})
      setIsStarted("IN-GAME")
    }
  }, [])

  const getCurrentPage = () =>{
    switch (isStarted) {
      case "PRE-START":
        return (
          <PreStartComponent setIsStarted={setIsStarted}></PreStartComponent>
      )
      case "START":
        return (
          <StartComponent game={game} setIsStarted={setIsStarted}></StartComponent>
      )
      case "DRIVER-NAMES":
        return (
          <DriverNamesComponent game={game} setGame={setGame} setIsStarted={setIsStarted}></DriverNamesComponent>
      )
      case "IN-GAME":
        return (
          <InGameComponent game={game} setGame={setGame} setIsStarted={setIsStarted}></InGameComponent>
      )

      case "FINISH":
        return (
          <FinishComponent game={game}></FinishComponent>
      )

      case "HISTORY":
        return (
          <HistoryComponent></HistoryComponent>
      )
    
      default:
        break;
    }
  }


  return (
    <div className="appContainer">
        <div className="appCard">
          {getCurrentPage()}
        </div>
    </div>
  );
}

export default App;
