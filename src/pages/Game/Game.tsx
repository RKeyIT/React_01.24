import { Button } from '../../shared/Button/Button'
import { ProgressBar } from '../../shared/ProgressBar/ProgressBar'
import { Answers } from '../../shared/Answers/Answers'
import { TextField } from '../../shared/TextField/TextField'
import { Timer } from '../../shared/Timer/Timer'
import styles from './Game.module.css'
import { FC, useEffect, useState } from 'react'
import { PageNames } from '../../context/GameContext/GameContext.types'
import { Heading } from '../../shared/Heading/Heading'
import { useNavigate } from 'react-router-dom'
import { URLS } from '../../router/router.types'
import { bool, mult, mix1, mix2 } from '../../MOCKDATA'

export const Game: FC = () => {
  const MOCKDATA = [bool, mult, mix1, mix2]

  const navigate = useNavigate()

  const [answersType, setAnswersType] = useState<'boolean' | 'multiple'>('boolean')
  const [questionObjArray, setQuestionObjArray] = useState<any[]>([])
  const [currentQuestIndex, setCurrentQuestIndex] = useState(0);
  const [currentQuest, setCurrentQuest] = useState('')
  const [correct, setCorrect] = useState('')
  const [incorrect, setIncorrect] = useState('')

  useEffect(() => {
   (async () => {
        await getRandomData().then(data => {
          setQuestionObjArray(data.results)
        })
        .catch(e => console.error(e))
    })()
  }, [])

  useEffect(() => {
    if(questionObjArray[currentQuestIndex]) {
      const currentQuestObject = questionObjArray[currentQuestIndex]

      const {question, type, correct_answer, incorrect_answers} = currentQuestObject

      setCurrentQuest(question)
      setAnswersType(type)
      setCorrect(correct_answer)
      setIncorrect(incorrect_answers)
    }
  }, [questionObjArray, currentQuestIndex])

  const acceptHandler = () => {
    setAnswersType(answersType === 'boolean' ? 'multiple' : 'boolean')
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
      <ProgressBar barsCount={questionObjArray.length} />
      <div className={styles.question}>
        <TextField>
          {currentQuest}
        </TextField>
      </div>
      <div className={styles.answers}>
        <Answers type={answersType} correct={correct} incorrect={incorrect} />
      </div>
      <Button content="Accept" style="green" callback={acceptHandler} />
    </div>
  )
}
