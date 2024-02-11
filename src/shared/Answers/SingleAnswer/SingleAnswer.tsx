import styles from './SingleAnswer.module.css'
import { FC } from 'react'

interface IProps {
  id: number | string
  answer: string
}

export const SingleAnswer: FC<IProps> = ({ id, answer }) => {
  return (
    <div className={styles.SingleAnswer}>
      <input className={styles.hiddenInput} type="radio" name="radio" id={`${id}`} />
      <label className={styles.label} title={`${answer}`} htmlFor={`${id}`}>
        {answer}
      </label>
    </div>
  )
}
