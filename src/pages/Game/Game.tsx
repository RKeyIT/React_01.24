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
import { useGameReducer, GameAC } from '../../reducers/GameReducer'

export const Game: FC = () => {
  const MOCKDATA = [bool, mult, mix1, mix2]

  const navigate = useNavigate()
  const [gameState, gameDispatch] = useGameReducer()

  const { questionCollection, question, currentIndex, correct_answer, incorrect_answers } = gameState

  let playerAnswer: string | null = null

  useEffect(() => {
   (async () => {
        await getRandomData().then(data => {
          gameDispatch(GameAC.collection(data.results))
        })
        .catch(e => console.error(e))
    })()
  }, [])

  useEffect(() => {
    if(questionCollection[currentIndex]) {
      const currentState = questionCollection[currentIndex]

      const {question, correct_answer, incorrect_answers} = currentState

      gameDispatch(GameAC.question(question))
      gameDispatch(GameAC.correct_answer(correct_answer))
      gameDispatch(GameAC.incorrect_answers(incorrect_answers))
    }
  }, [questionCollection, currentIndex])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    playerAnswer = e.target.value
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (playerAnswer === null) return

    if (currentIndex < questionCollection.length - 1) {
      console.log(playerAnswer === correct_answer)
      gameDispatch(GameAC.index(currentIndex + 1))
    } else {
      navigate(URLS.RESULT)
    }
  }

  const timeoutCallback = () => {
    if (currentIndex === questionCollection.length - 1) {
      navigate(URLS.RESULT)
    } else {
      gameDispatch(GameAC.index(currentIndex + 1))
    }
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
