
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

export type UserType = {
    avatar_url: string,
    followers: number,
    following: number,
    public_repos: number,
    name: string,
    login: string
}

