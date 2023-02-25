import { useState } from "react"
import { useStopwatch } from "react-timer-hook";
import StartPage from "./pages/StartPage"
import GamePage from "./pages/GamePage";
import FinishPage from "./pages/FinishPage";
import { words } from "./words"
import GamesettingsContext from "./context/GameSettingsContext";

function App() {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const { seconds, minutes, start, pause, reset} = useStopwatch({autoStart: false});


  const getRandomWord = ():string => {
    const rndNum: number = Math.floor(Math.random() * words.length);
    return words[rndNum];
  }

  return (
    <div className="container-fluid bg-dark p-0">
      <div className="container p-0 vh-100 text-light d-flex flex-column align-items-center justify-content-center">
        <GamesettingsContext.Provider value={{isStarted, setIsStarted, isFinished, setIsFinished, score, setScore, seconds, minutes, start, pause, reset}}>
          {
            !isStarted ? <StartPage /> : isFinished ? <FinishPage /> : <GamePage randomWord={getRandomWord()} />
          }
        </GamesettingsContext.Provider>
      </div>
    </div>
  )
}

export default App
