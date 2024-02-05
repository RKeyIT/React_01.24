import { FC } from 'react'
import styles from './Answers.module.css'
import { SingleAnswer } from './SingleAnswer/SingleAnswer'

interface IProps {
  type: 'boolean' | 'multiply'
}

export const Answers: FC<IProps> = ({ type }) => {
  return (
    <div className={type === 'multiply' ? styles.Multiple : styles.Boolean}>
      {type === 'multiply' && (
        <>
          <SingleAnswer id={1} answer="answer 1" />
          <SingleAnswer id={2} answer="answer 2" />
          <SingleAnswer id={3} answer="answer 3" />
          <SingleAnswer id={4} answer="answer 4" />
        </>
      )}
      {type === 'boolean' && (
        <>
          <SingleAnswer id={1} answer="True" />
          <SingleAnswer id={2} answer="False" />
        </>
      )}
    </div>
  )
}
