import { Fragment } from "react";

const DriverNamesComponent = ({game, setGame, setIsStarted}) => {
    return (
        <Fragment>
        {game.carList.map((item,i)=>(
          <div key={i} style={{display: "flex", flexDirection: "column", alignItems: "center", paddingBottom:"12px"}}>
            <label style={{paddingBottom:"4px"}}>{`Ingresa el nombre del conductor ${i + 1}`}</label>
            <input value={game.carList[i].driverName} 
            onChange={(e)=> {
              game.carList[i].driverName = e.target.value;
              setGame({...game})
            }}></input>
          </div>
        ))}
        <button onClick={()=> {
          setIsStarted("IN-GAME")
          localStorage.setItem("currentGame", JSON.stringify(game))
          }}>A jugar</button>
      </Fragment>
    )
}

export default DriverNamesComponent