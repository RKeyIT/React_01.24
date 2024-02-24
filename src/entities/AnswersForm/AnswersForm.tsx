import { Button } from '../../shared/Button/Button'
import styles from './AnswersForm.module.css'
import { ChangeEvent, FC, FormEvent } from 'react'

interface IProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  answers: string[]
}

export const AnswersForm: FC<IProps> = ({ onSubmit, onChange, answers }) => {
  return (
    <form onSubmit={onSubmit} className={styles.AnswersForm}>
      {answers.map((answer, index) => {
        const key = answer + index + answer.length + answer[0]

        return (
          <div key={key}>
            <input
              onChange={onChange}
              className={styles.hiddenInput}
              value={answer}
              type="radio"
              name="radio"
              id={String(index)}
            />
            <label className={styles.label} title={`${answer}`} htmlFor={String(index)}>
              {answer}
            </label>
          </div>
        )
      })}
      <Button type="submit" content="Accept" style="green" />
    </form>
  )
}
