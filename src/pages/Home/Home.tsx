import { Button } from '../../shared/Button/Button'
import { NumberInput } from '../../entities/NumberInput/NumberInput'
import styles from './Home.module.css'
import { Select } from '../../shared/Select/Select'
import { QuizCategories, QuizDifficulties, QuizTime, QuizType } from '../../global.types'
import { useEffect, useState } from 'react'
import { ActionTypeEnum, useHomeReducer } from '../../reducers/HomeReducer'
import { useGameContext } from '../../context/GameContext'

export const Home = () => {
  // TODO - Rebuild the component using Context
  // Request example: https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple
  const BASE_API_URL = `https://opentdb.com/api.php?`

  const context = useGameContext()

  const [state, dispatch] = useHomeReducer()

  const [apiURL, setApiURL] = useState(
    `${BASE_API_URL}amount=${state.questionAmount}`
  )

  const setQuestionAmount = (id: number) => dispatch({type: ActionTypeEnum.AMOUNT, payload: String(id)})
  const setCategory = (id: string) => dispatch({type: ActionTypeEnum.CATEGORY, payload: id})
  const setDifficulty = (id: string) => dispatch({type: ActionTypeEnum.DIFFICULTY, payload: id})
  const setType = (id: string) =>  dispatch({type: ActionTypeEnum.TYPE, payload: id})
  const setTime = (id: string) => dispatch({type: ActionTypeEnum.TIME, payload: id})

  const onStartHandler = () => console.log(state.time, apiURL)
  const onShowStatisticsHandler = () => console.log('STATISTICS')

  useEffect(() => {
    const { category, questionAmount, difficulty, type } = state

    let urlParams = 'amount=' + questionAmount

    if (category !== 'any') urlParams += '&category=' + category
    if (difficulty !== 'any') urlParams += '&difficulty=' + difficulty
    if (type !== 'any') urlParams += '&type=' + type

    setApiURL(BASE_API_URL + urlParams)
  }, [state, BASE_API_URL])

  return (
    <div className={styles.Home}>
      <div className={styles.selects}>
        <Select callback={setCategory} optionObject={QuizCategories} />
        <Select callback={setDifficulty} optionObject={QuizDifficulties} />
        <Select callback={setType} optionObject={QuizType} />
        <Select callback={setTime} optionObject={QuizTime} />
      </div>
      <div className={styles.input}>
        <NumberInput
          callback={setQuestionAmount}
          min={context.minQuestionsCount}
          max={context.maxQuestionsCount}
          label="Chose the number of questions: "
        />
      </div>
      <div className={styles.buttons}>
        <Button callback={onStartHandler} content="Start quiz" style="green" />
        <Button callback={onShowStatisticsHandler} content="See my statistics" style="white" />
      </div>
    </div>
  )
}
