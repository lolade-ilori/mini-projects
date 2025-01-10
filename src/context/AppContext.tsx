import { createContext, PropsWithChildren, useState } from "react";
import { AppContextType, AppStatus } from "../@types/test";

const defaultState = {
    isToggle: false,
    alterToggle: () => {}
} as AppContextType

// Create context
const AppContext = createContext(defaultState)


// App provider provides context to the component consumers
export const AppProvider = ({children}: PropsWithChildren) => {
    const [isToggle, setIsToggle] = useState<AppStatus>(false)

    function alterToggle() {
        setIsToggle((prev) => !prev)
    }

    return (
        <AppContext.Provider value={{
            isToggle, 
            alterToggle
        }}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContext