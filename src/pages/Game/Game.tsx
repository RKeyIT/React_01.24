import { ProgressBar } from '../../shared/ProgressBar/ProgressBar'
import { TextField } from '../../shared/TextField/TextField'
import { Timer } from '../../shared/Timer/Timer'
import styles from './Game.module.css'
import { ChangeEvent, FC, FormEvent, useEffect } from 'react'
import { Heading } from '../../shared/Heading/Heading'
import { useNavigate } from 'react-router-dom'
import { URLS } from '../../router/router.types'
import { bool, mult, mix1, mix2 } from '../../MOCKDATA'
import { AnswersForm } from '../../entities/AnswersForm/AnswersForm'
import { useAppDispatch, useAppSelector } from '../../store'
import {
  setGameStartAsFalseAC,
  collectionAC,
  correctAC,
  incorrectAC,
  questionAC,
  saveTimeResult,
  setAnswerAndNextIndex
} from '../../store/gameSlice'
import { PageNames } from '../../global.types'
import { fetchGameData } from '../../store/gameSlice'
import { persistData } from '../../store/persistorSlice'

export const Game: FC = () => {
  const MOCKDATA = [bool, mult, mix1, mix2]

  const navigate = useNavigate()

  const game = useAppSelector((store) => store.game)
  const config = useAppSelector((store) => store.config)
  const dispatch = useAppDispatch()

  const { questionCollection, question, correct_answer, incorrect_answers, currentIndex, player_answers } = game
  const { questionAmount, category, difficulty, type, time } = config

  const dispatchCollection = (payload: object[]) => dispatch(collectionAC(payload))
  const dispatchQuestion = (payload: string) => dispatch(questionAC(payload))
  const dispatchCorrect = (payload: string) => dispatch(correctAC(payload))
  const dispatchIncorrect = (payload: string[]) => dispatch(incorrectAC(payload))
  const dispatchAnswer = (payload: string) => dispatch(setAnswerAndNextIndex(payload))

  let playerAnswer: string | null = null
  
  useEffect(() => {
    let timerCounter = 0
    dispatch(fetchGameData({ questionAmount, category, difficulty, type }))

    const timer = setInterval(() => {
      timerCounter++
    }, 1000)

    return () => {
      clearInterval(timer)
      dispatch(saveTimeResult(timerCounter))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const index = Math.round(Math.random() * 3)
    dispatchCollection(MOCKDATA[index].results)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (questionCollection[currentIndex]) {
      const currentState = questionCollection[currentIndex]

      const { question, correct_answer, incorrect_answers } = currentState

      dispatchQuestion(question)
      dispatchCorrect(correct_answer)
      dispatchIncorrect(incorrect_answers)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionCollection, currentIndex])

  const submitAnswer = () => {
    dispatchAnswer(playerAnswer!)

    if (currentIndex === questionCollection.length - 1) {
      dispatch(persistData({questionCollection, player_answers}))
      dispatch(setGameStartAsFalseAC())
      navigate(URLS.RESULT, { replace: true })
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    playerAnswer = e.target.value
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (playerAnswer === null) return

    submitAnswer()
  }

  return (
    <div className={styles.Game}>
      <Heading pageName={PageNames.GAME} />
      <Timer seconds={Number(time) * 60} timeoutCallback={submitAnswer} />
      <ProgressBar />
      <TextField>{question}</TextField>
      <AnswersForm
        answers={[correct_answer, ...incorrect_answers]}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </div>
  )
}
