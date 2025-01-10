import { useContext } from "react"
import AppContext from "../context/AppContext"



const Display = () => {

    const {isToggle} = useContext(AppContext)

  return (
    <div>
        <p>Current State: {isToggle ? 'ON' : 'OFF'}</p>
    </div>
  )
}

export default Display