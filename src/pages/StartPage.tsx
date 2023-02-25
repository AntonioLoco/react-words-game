import { useContext } from "react"
import GamesettingsContext from "../context/GameSettingsContext"

function StartPage() {
  const {setIsStarted} = useContext(GamesettingsContext);

  return (
    <div className='container text-center'>
        <h1 className='mb-5 text-success'>Press Play to start the game!!!</h1>
        <button className='btn btn-success' id="btn-start" onClick={ ():void => setIsStarted(true)}><strong>Play</strong></button>
    </div>
  )
}

export default StartPage