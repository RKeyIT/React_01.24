import { TextField } from '../../shared/TextField/TextField'
import { Timer } from '../../shared/Timer/Timer'
import styles from './Game.module.css'
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { URLS } from '../../router/router.types'
import { AnswersForm } from '../../entities/AnswersForm/AnswersForm'
import { useAppDispatch, useAppSelector } from '../../store'
import { saveTimeResult, setPlayerAnswerAC } from '../../store/gameSlice'
import { fetchGameData } from '../../store/gameSlice'

export const Game: FC = () => {
  const navigate = useNavigate()

  const game = useAppSelector((store) => store.game)
  const config = useAppSelector((store) => store.config)
  const dispatch = useAppDispatch()

  const [isFetched, setFetched] = useState(false)

  const {
    questionCollection,
    question,
    possible_answers,
    currentIndex,
    isMockGame
  } = game
  const { questionAmount, category, difficulty, type, time } = config

  const dispatchAnswer = (payload: string) => dispatch(setPlayerAnswerAC(payload))

  let playerAnswer: string | null = null

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchGameData({ questionAmount, category, difficulty, type }))
      setFetched(true)
      return
    }

    let timerCounter = 0

    const timer = setInterval(() => {
      timerCounter++
    }, 1000)

    return () => {
      clearInterval(timer)
      dispatch(saveTimeResult(timerCounter))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionCollection])

  const submitAnswer = () => {
    dispatchAnswer(playerAnswer!)

    if (currentIndex === questionCollection.length - 1) navigate(URLS.RESULT, { replace: true })
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    playerAnswer = e.target.value
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    playerAnswer === null || submitAnswer()
  }

  return (
    <div className={styles.Game}>
      <Timer seconds={Number(time) * 60} timeoutCallback={submitAnswer} />
      <TextField>{question}</TextField>
      <AnswersForm answers={possible_answers} onSubmit={onSubmit} onChange={onChange} />
      {isMockGame && (
        <p className={styles.warning}>
          Data requesting was failed. The mock game has been started without results saving!
        </p>
      )}
    </div>
  )
}

export default Game
