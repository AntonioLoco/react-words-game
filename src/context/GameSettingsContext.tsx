import { createContext } from "react";

interface Gamesettings {
    isStarted: boolean,
    setIsStarted: (isStarted: boolean) => void,    
    isFinished: boolean,
    setIsFinished: (isStarted: boolean) => void,
    score: number,
    setScore: (score: number) => void,
    seconds: number,
    minutes: number,
    start: () => void
    pause: () => void
    reset: () => void
}

const GamesettingsContext = createContext<Gamesettings>({
    isStarted: false,
    setIsStarted: () => {},
    isFinished: false,
    setIsFinished: () => {},
    score: 0,
    setScore: () => {},
    seconds: 0,
    minutes: 0,
    start: () => {},
    pause: () => {},
    reset: () => {}
})

export default GamesettingsContext