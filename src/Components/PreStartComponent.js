import { Fragment } from "react"

const PreStartComponent = ({setIsStarted}) => {
    return(
      <Fragment>
        <h1>Proyecto sofka</h1>
        <h4>por: Juan Diego</h4>
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