import { Button } from '../../shared/Button/Button'
import { ProgressBar } from '../../shared/ProgressBar/ProgressBar'
import { Answers } from '../../shared/Answers/Answers'
import { TextField } from '../../shared/TextField/TextField'
import { Timer } from '../../shared/Timer/Timer'
import styles from './Game.module.css'
import { FC, useState } from 'react'
import { PageNames } from '../../context/GameContext.types'
import { Heading } from '../../shared/Heading/Heading'

export const Game: FC = () => {
  const [answersType, setAnswersType] = useState<'boolean' | 'multiply'>('boolean')

  const acceptHandler = () => {
    setAnswersType(answersType === 'boolean' ? 'multiply' : 'boolean')
  }

  return (
    <div className={styles.Game}>
      <Heading pageName={PageNames.GAME} />
      <Timer />
      <ProgressBar />
      <div className={styles.question}>
        <TextField />
      </div>
      <div className={styles.answers}>
        {answersType === 'boolean' ? <Answers type="boolean" /> : <Answers type="multiply" />}
      </div>
      <Button content="Accept" style="green" callback={acceptHandler} />
    </div>
  )
}
