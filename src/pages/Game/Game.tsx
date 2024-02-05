import { Button } from '../../shared/Button/Button'
import { ProgressBar } from '../../shared/ProgressBar/ProgressBar'
import { Answers } from '../../shared/QuestionWindow/Answers/Answers'
import { QuestionWindow } from '../../shared/QuestionWindow/QuestionWindow'
import { Timer } from '../../shared/Timer/Timer'
import styles from './Game.module.css'
import { FC, useState } from 'react'

export const Game: FC = () => {
  const [answersType, setAnswersType] = useState<'boolean' | 'multiply'>('boolean')

  const acceptHandler = () => {
    setAnswersType(answersType === 'boolean' ? 'multiply' : 'boolean')
  }

  return (
    <div className={styles.Game}>
      <Timer />
      <ProgressBar />
      <QuestionWindow />
      <div className={styles.answers}>
        {answersType === 'boolean' ? <Answers type="boolean" /> : <Answers type="multiply" />}
      </div>
      <Button content="Accept" style="green" callback={acceptHandler} />
    </div>
  )
}
