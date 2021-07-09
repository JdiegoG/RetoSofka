import { Fragment } from "react"

const PreStartComponent = ({setIsStarted}) => {
    return(
      <Fragment>
        <h1>RETO SOFKA</h1>
        <h4>Por: Juan Diego Gonzalez</h4>
        <button onClick={() => setIsStarted("START")}>
        start
        </button>
        <button onClick={() => setIsStarted("HISTORY")}>
          Historial
        </button>
      </Fragment>
    )
}

export default PreStartComponent