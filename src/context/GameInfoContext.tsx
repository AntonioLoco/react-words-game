import { createContext } from "react"

interface GameInfoContextValue {
    word: string[],
    setWord: (word: string[]) => void,
    userWord: string,
    setUserWord: (userWord: string) => void, 
}

const GameInfoContext = createContext<GameInfoContextValue>({
    word: [],
    setWord: () => {},
    userWord: "",
    setUserWord: () => {},
})

export default GameInfoContext