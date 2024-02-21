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
import { saveTimeResult, setAnswerAndNextIndex } from '../../store/gameSlice'
import { PageNames } from '../../global.types'
import { fetchGameData } from '../../store/gameSlice'

export const Game: FC = () => {
  const MOCK_DATA = [bool, mult, mix1, mix2]
  const MOCK_COLLECTION = MOCK_DATA[Math.round(Math.random() * 3)].results
  const MOCK_QUESTION = MOCK_COLLECTION[0].question
  const MOCK_CORRECT_ANSWER = MOCK_COLLECTION[0].correct_answer
  const MOCK_INCORRECT_ANSWERS = MOCK_COLLECTION[0].incorrect_answers

  const navigate = useNavigate()

  const game = useAppSelector((store) => store.game)
  const config = useAppSelector((store) => store.config)
  const dispatch = useAppDispatch()

  const { 
    questionCollection, question, correct_answer, 
    incorrect_answers, currentIndex 
  } = game
  const { questionAmount, category, difficulty, type, time } = config

  const dispatchAnswer = (payload: string) => dispatch(setAnswerAndNextIndex(payload))

  let playerAnswer: string | null = null
  
  useEffect(() => {
    dispatch(fetchGameData({ questionAmount, category, difficulty, type }))

    if (!questionCollection.length) return
    let timerCounter = 0

    const timer = setInterval(() => {
      timerCounter++
    }, 1000)

    return () => {
      clearInterval(timer)
      dispatch(saveTimeResult(timerCounter))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  const correct = correct_answer || MOCK_CORRECT_ANSWER
  const incorrects = incorrect_answers.length ? incorrect_answers : MOCK_INCORRECT_ANSWERS
  const answers = [ correct, ...incorrects ]

  return (
    <div className={styles.Game}>
      <Heading pageName={PageNames.GAME} />
      <Timer seconds={Number(time) * 60} timeoutCallback={submitAnswer} />
      <ProgressBar />
      <TextField>{question || MOCK_QUESTION}</TextField>
      <AnswersForm
        answers={answers}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </div>
  )
}
