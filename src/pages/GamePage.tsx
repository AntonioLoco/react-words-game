import { useState, useEffect, useContext  } from "react"
import Keyboard from "../components/Keyboard";
import GameInfoContext from "../context/GameInfoContext";
import GamesettingsContext from "../context/GameSettingsContext";

function GamePage({randomWord}:any) {
    const [word, setWord] = useState<string[]>(randomWord.split(""));
    const [userWord, setUserWord] = useState<string>("");
    const {isStarted, setIsStarted, isFinished, setIsFinished, score, seconds, minutes, start, pause} = useContext(GamesettingsContext);

    useEffect(() => {
        if(userWord.length === word.length){
            pause();
            setIsFinished(true);
        }
    }, [userWord])

    useEffect(() => {
        start();
    }, [])

    return (
        <GameInfoContext.Provider value={{word, setWord, userWord, setUserWord}}>
            <h5>Timer: {minutes < 10 ? `0${minutes}` : minutes}:{ seconds < 10 ? `0${seconds}` : seconds}</h5>
            <h3 className="text-success">Punti: {score}</h3>
            <h1 className="ms-text-primary">{ word.map((el:string, index:number) => <span id={`letter-${index}`} key={index}>{el}</span>) }</h1>
            <Keyboard />
        </GameInfoContext.Provider>
    )
}

export default GamePage; 