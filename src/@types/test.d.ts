
export type AppStatus = true | false

export type AppContextType = {
    isToggle: AppStatus;
    alterToggle: () => void
}

export type MenuType = {
    id: number;
    title: string;
    url: string;
    children: MenuType[];
}
