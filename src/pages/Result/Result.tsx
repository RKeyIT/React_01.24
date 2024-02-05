import { Button } from '../../shared/Button/Button'
import { ProgressBar } from '../../shared/ProgressBar/ProgressBar'
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
  return (
    <div className={styles.Result}>
      <TextField>Thank you for completing this quiz. Here are your results</TextField>
      <TextField>Quiz configuration: type, category, time and difficulty</TextField>
      <TextField>You answered 5 out of 10 questions correctly</TextField>
      <ProgressBar />
      <TextField>Time spended: 05:29</TextField>
      <Button content='Restart'/>
      <Button content='Chose another quiz'/>
    </div>
  )
}
