
export type AppStatus = true | false

export type AppContextType = {
    isToggle: AppStatus;
    alterToggle: () => void
}
