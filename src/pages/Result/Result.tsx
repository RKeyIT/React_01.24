import { Link } from 'react-router-dom'
import { Button } from '../../shared/Button/Button'
import { Heading } from '../../shared/Heading/Heading'
import { ProgressBar } from '../../shared/ProgressBar/ProgressBar'
import { Table } from '../../shared/Table/Table'
import { TextField } from '../../shared/TextField/TextField'
import styles from './Result.module.css'
import { FC } from 'react'
import { URLS } from '../../router/router.types'
import { PageNames } from '../../global.types'
import { useAppSelector } from '../../store'

export const Result: FC = () => {
  const answers = useAppSelector(store => store.game.player_answers)

  let rightAnswers = 0;
  answers.forEach((el) => {
    if (el) rightAnswers++
  })

  return (
    <div className={styles.Result}>
      <Heading pageName={PageNames.RESULT} />
      <div className={styles.congratulations}>
        <TextField>Thank you for completing this quiz. Here are your results</TextField>
        <Table name="Quiz configuration" />
      </div>
      <div className={styles.summary}>
        <TextField>You answered {rightAnswers} out of {answers.length} questions correctly</TextField>
        <TextField>Time spent: 05:29</TextField>
        <ProgressBar />
      </div>
      <div className={styles.buttons}>
        <Link to={URLS.GAME}>
          <Button content="Restart" />
        </Link>
        <Link to={URLS.HOME}>
          <Button content="Chose another quiz" />
        </Link>
      </div>
    </div>
  )
}
