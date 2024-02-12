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
import { answerAC, collectionAC, correctAC, incorrectAC, indexAC, questionAC } from '../../store/gameSlice'
import { PageNames } from '../../global.types'

export const Game: FC = () => {
  const MOCKDATA = [bool, mult, mix1, mix2]

  const navigate = useNavigate()

  const game = useAppSelector(store => store.game)
  const dispatch = useAppDispatch()

  const { questionCollection, question, correct_answer, incorrect_answers, currentIndex } = game
  const dispatchCollection = (payload: any) => dispatch(collectionAC(payload))
  const dispatchIndex = () => dispatch(indexAC())
  const dispatchQuestion = (payload: string) => dispatch(questionAC(payload))
  const dispatchCorrect = (payload: string) => dispatch(correctAC(payload))
  const dispatchIncorrect = (payload: string[]) => dispatch(incorrectAC(payload))
  const dispatchAnswer = (payload: boolean) => dispatch(answerAC(payload))

  let playerAnswer: string | null = null

  useEffect(() => {
   (async () => {
        await getRandomData().then(data => {
          dispatchCollection(data.results)
        })
        .catch(e => console.error(e))
    })()
  }, [])

  useEffect(() => {
    if(questionCollection[currentIndex]) {
      const currentState = questionCollection[currentIndex]

      const {question, correct_answer, incorrect_answers} = currentState

      dispatchQuestion(question)
      dispatchCorrect(correct_answer)
      dispatchIncorrect(incorrect_answers)
    }
  }, [questionCollection, currentIndex])

  const submitAnswer = () => {
    dispatchAnswer(playerAnswer === correct_answer)
    dispatchIndex()

    if (currentIndex === questionCollection.length - 1) navigate(URLS.RESULT)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    playerAnswer = e.target.value
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submitAnswer()
  }

  async function getRandomData() {
    const index = Math.round(Math.random() * 3)
    return MOCKDATA[index]
  }

  return (
    <div className={styles.Game}>
      <Heading pageName={PageNames.GAME} />
      <Timer timeoutCallback={submitAnswer}/>
      <ProgressBar />
      <TextField children={question} />
      <AnswersForm answers={[correct_answer, ...incorrect_answers]}
                   onSubmit={onSubmit} onChange={onChange} />
    </div>
  )
}
