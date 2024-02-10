import { FC } from 'react'
import styles from './Answers.module.css'
import { SingleAnswer } from './SingleAnswer/SingleAnswer'

interface IProps {
  type: 'boolean' | 'multiple',
  correct: string,
  incorrect: string | string[],
}

export const Answers: FC<IProps> = ({ type, correct, incorrect }) => {
  const incorrectAnswers = Array.isArray(incorrect) ? incorrect : [incorrect]
  const answerstArr = fillAnswersArrRandomely()

  function fillAnswersArrRandomely() {
    const arr = [correct]

    incorrectAnswers.forEach(el => {
      if (Math.round(Math.random())) {
        arr.push(el)
      } else {
        arr.unshift(el)
      }
    })

    return arr
  }

  console.log(answerstArr)

  return (
    <div className={type === 'multiple' ? styles.Multiple : styles.Boolean}>
      {type === 'multiple' && (
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
