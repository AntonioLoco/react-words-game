import { useContext, useEffect, useRef } from "react";
import GameInfoContext from "../context/GameInfoContext";
import GamesettingsContext from "../context/GameSettingsContext";

function Button({letter, index, buttons}:any) {
  const {word, userWord, setUserWord} = useContext(GameInfoContext);
  const {score, setScore} = useContext(GamesettingsContext);
  const btnPressed = useRef(null);
  

  const checkWord = () => {
      if(userWord.length < word.length){
        if(letter === word[userWord.length]){
          document.getElementById(`letter-${userWord.length}`)?.classList.add("text-success");
          setScore(score + 1);
          setUserWord(userWord + letter);
        } else {
          document.getElementById(`letter-${userWord.length}`)?.classList.add("error");
          setTimeout( () => {
            document.getElementById(`letter-${userWord.length}`)?.classList.remove("error");
          },1000);
          if(score > 0){
            setScore(score - 1);
          }
        }
      }
  }

  useEffect(() => {
    if(!buttons.includes(btnPressed)){
      buttons.push(btnPressed);
    }

    const checkKeyboard = (e:any) => {
      buttons.map( (el:any) => {
        if(el.current.id === `btn-${e.key}`){
          el.current.style.cssText = "";
          el.current.classList.remove("keyEnterEffect");
          el.current.classList.add("pressed");
          if(userWord.length < word.length - 1){
            setTimeout(() => {
              el.current.classList.remove("pressed");
            }, 100);
          }
        }
      })

      if(userWord.length < word.length){
        if(e.key === word[userWord.length]){
          document.getElementById(`letter-${userWord.length}`)?.classList.add("text-success");
          setScore(score + 1);
          setUserWord(userWord + e.key);
        } else {
          document.getElementById(`letter-${userWord.length}`)?.classList.add("error");
          setTimeout( () => {
            document.getElementById(`letter-${userWord.length}`)?.classList.remove("error");
          },1000);
          if(score > 0){
            setScore(score - 1);
          }
        }
      }
    }
    window.addEventListener("keydown", checkKeyboard);

    return () => {
      window.removeEventListener('keydown', checkKeyboard);
    };
  }, [userWord])

  return (
    <div className="ms-button keyEnterEffect" style={{animationDuration: `0.${index}s`}} onClick={checkWord} id={`btn-${letter}`} ref={btnPressed}>{letter}</div>
  )
}

export default Button