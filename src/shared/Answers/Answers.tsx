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
    const arr: string[] = []

    incorrectAnswers.forEach(el => {
      Math.round(Math.random()) ? arr.push(el) : arr.unshift(el)
    })

    const randomIndex = Math.round(Math.random() * arr.length)
    
    arr.splice(randomIndex, 0, correct)

    return arr
  }

  return (
    <div className={type === 'multiple' ? styles.Multiple : styles.Boolean}>
      {answerstArr.map((answer, index) => {
        return <SingleAnswer key={'SingleAnswer ' + index} id={index} answer={answer} />
      })}
    </div>
  )
}
