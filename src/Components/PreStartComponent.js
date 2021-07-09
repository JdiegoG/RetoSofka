import { Fragment } from "react"

const PreStartComponent = ({setIsStarted}) => {
    return(
      <Fragment>
        <button onClick={() => setIsStarted("START")}>
        start
        </button>
      </Fragment>
    )
}

export default PreStartComponent