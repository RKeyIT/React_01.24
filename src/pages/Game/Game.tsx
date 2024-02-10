import { Button } from '../../shared/Button/Button'
import { ProgressBar } from '../../shared/ProgressBar/ProgressBar'
import { Answers } from '../../shared/Answers/Answers'
import { TextField } from '../../shared/TextField/TextField'
import { Timer } from '../../shared/Timer/Timer'
import styles from './Game.module.css'
import { FC, useState } from 'react'
import { PageNames } from '../../context/GameContext/GameContext.types'
import { Heading } from '../../shared/Heading/Heading'
import { useNavigate } from 'react-router-dom'
import { URLS } from '../../router/router.types'

export const Game: FC = () => {
  const navigate = useNavigate()
  const [answersType, setAnswersType] = useState<'boolean' | 'multiply'>('boolean')

  const acceptHandler = () => {
    setAnswersType(answersType === 'boolean' ? 'multiply' : 'boolean')
  }

  const timeoutCallback = () => {
    navigate(URLS.RESULT)
  }

  return (
    <div className={styles.Game}>
      <Heading pageName={PageNames.GAME} />
      <Timer timeoutCallback={timeoutCallback}/>
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
