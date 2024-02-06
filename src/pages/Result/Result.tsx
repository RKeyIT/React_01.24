import { PageNames } from '../../context/GameContext.types'
import { useGameContext } from '../../context/useGameContext'
import { Button } from '../../shared/Button/Button'
import { ProgressBar } from '../../shared/ProgressBar/ProgressBar'
import { Table } from '../../shared/Table/Table'
import { TextField } from '../../shared/TextField/TextField'
import styles from './Result.module.css'
import { FC } from 'react'

/* 
1. General result text like “Thank you for completing this quiz. Here are your results”
2. Result in numbers of correct answers. For example “You answered 5 out of 10 questions correctly”. It can also be in a form of graphic representation
3. Quiz configuration, type, category, time and difficulty
4. Text indicating how much time user took to answer all the questions
5. A button “Restart” which will restart this same quiz with same configuration from the start
6. A button “Choose another quiz” which will navigate the user to quiz configuration screen
*/

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
