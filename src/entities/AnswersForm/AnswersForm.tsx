import { Button } from '../../shared/Button/Button'
import { ProgressBar } from '../../shared/ProgressBar/ProgressBar'
import { useAppSelector } from '../../store'
import styles from './AnswersForm.module.css'
import { ChangeEvent, FC, FormEvent } from 'react'

interface IProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  answers: string[]
}

export const AnswersForm: FC<IProps> = ({ onSubmit, onChange, answers }) => {
  const questionIndex = useAppSelector((state) => state.game.currentIndex)

  return (
    <form onSubmit={onSubmit} className={styles.AnswersForm}>
      <div className={styles.answers}>
        {answers.map((answer, index) => {
          const key = questionIndex + index + answer
          const id = String(index)

          return (
            <div key={key}>
              <input
                onChange={onChange}
                className={styles.hiddenInput}
                value={answer}
                type="radio"
                name="radio"
                id={id}
              />
              <label className={styles.label} title={`${answer}`} htmlFor={id}>
                {answer}
              </label>
            </div>
          )
        })}
      </div>
      <ProgressBar />
      <Button type="submit" content="Accept answer" style="green" />
    </form>
  )
}
