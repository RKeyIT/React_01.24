import { PageNames } from '../../context/GameContext.types'
import { useGameContext } from '../../context/useGameContext'
import { Button } from '../../shared/Button/Button'
import { Heading } from '../../shared/Heading/Heading'
import { ProgressBar } from '../../shared/ProgressBar/ProgressBar'
import { Table } from '../../shared/Table/Table'
import { TextField } from '../../shared/TextField/TextField'
import styles from './Result.module.css'
import { FC } from 'react'

export const Result: FC = () => {
  const [, setContext] = useGameContext()

  const onRestart = () => {
    setContext((prev) => ({
      ...prev,
      currentPage: PageNames.GAME
    }))
  }

  const onAnotherQuiz = () => {
    setContext((prev) => ({
      ...prev,
      currentPage: PageNames.HOME
    }))
  }

  return (
    <div className={styles.Result}>
      <Heading pageName={PageNames.RESULT} />
      <div className={styles.congratulations}>
        <TextField>Thank you for completing this quiz. Here are your results</TextField>
        <Table name="Quiz configuration" />
      </div>
      <div className={styles.summary}>
        <TextField>You answered 5 out of 10 questions correctly</TextField>
        <TextField>Time spent: 05:29</TextField>
        <ProgressBar />
      </div>
      <div className={styles.buttons}>
        <Button callback={onRestart} content="Restart" />
        <Button callback={onAnotherQuiz} content="Chose another quiz" />
      </div>
    </div>
  )
}
