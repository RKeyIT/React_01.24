import { ProgressBar } from '../../shared/ProgressBar/ProgressBar'
import { TextField } from '../../shared/TextField/TextField'
import { Timer } from '../../shared/Timer/Timer'
import styles from './Game.module.css'
import { ChangeEvent, FC, FormEvent, useEffect } from 'react'
import { PageNames } from '../../context/GameContext/GameContext.types'
import { Heading } from '../../shared/Heading/Heading'
import { useNavigate } from 'react-router-dom'
import { URLS } from '../../router/router.types'
import { bool, mult, mix1, mix2 } from '../../MOCKDATA'
import { AnswersForm } from '../../entities/AnswersForm/AnswersForm'
import { GameReducerActionTypes, useGameReducer } from '../../reducers/GameReducer'

export const Game: FC = () => {
  const MOCKDATA = [bool, mult, mix1, mix2]

  const navigate = useNavigate()
  const [gameState, gameDispatch] = useGameReducer()

  const { questionCollection, question, currentIndex, correct_answer, incorrect_answers } = gameState

  let playerAnswer: string | null = null

  useEffect(() => {
   (async () => {
        await getRandomData().then(data => {
          gameDispatch({type: GameReducerActionTypes.COLLECTION, payload: data.results})
          // setQuestionObjArray(data.results)
        })
        .catch(e => console.error(e))
    })()
  }, [])

  useEffect(() => {
    if(questionCollection[currentIndex]) {
      const currentState = questionCollection[currentIndex]

      const {question, correct_answer, incorrect_answers} = currentState

      gameDispatch({type: GameReducerActionTypes.QUEST, payload: question})
      gameDispatch({type: GameReducerActionTypes.CORRECT, payload: correct_answer})
      gameDispatch({type: GameReducerActionTypes.INCORRECT, payload: incorrect_answers})
    }
  }, [questionCollection, currentIndex])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    playerAnswer = e.target.value
    console.log(playerAnswer === correct_answer)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (playerAnswer === null) return
  }

  const timeoutCallback = () => {
    navigate(URLS.RESULT)
  }

  async function getRandomData() {
    const index = Math.round(Math.random() * 3)
    return MOCKDATA[index]
  }

  return (
    <div className={styles.Game}>
      <Heading pageName={PageNames.GAME} />
      <Timer timeoutCallback={timeoutCallback}/>
      <ProgressBar barsCount={questionCollection.length} />
      <TextField children={question} />
      <AnswersForm answers={[correct_answer, ...incorrect_answers]}
                   onSubmit={onSubmit} onChange={onChange} />
    </div>
  )
}
