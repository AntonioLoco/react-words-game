import { useContext } from "react";
import GamesettingsContext from "../context/GameSettingsContext";

function FinishPage() {
  const {setIsFinished, setIsStarted, score, setScore, seconds, minutes, reset} = useContext(GamesettingsContext);
  return (
    <div className="text-center">
        <h1 className="mb-4">Hai vinto con {score} punti e hai impiegato { minutes > 0 ? minutes == 1 ? `${minutes} minuto e` : `${minutes} minuti e` : ""} { seconds } secondi</h1>
        <button className="btn btn-success" onClick={() => {setIsStarted(true); setScore(0); setIsFinished(false); reset()}}>Play Again</button>
    </div>
  )
}

export default FinishPage