import { useContext } from "react"
import AppContext from "../context/AppContext"



const Toggle = () => {
    const {alterToggle} = useContext(AppContext)

  return (
    <button onClick={() => alterToggle()}>
        Toggle state
    </button>
  )
}

export default Toggle