import { Button } from '../../shared/Button/Button'
import { NumberInput } from '../../entities/NumberInput/NumberInput'
import styles from './Home.module.css'
import { Select } from '../../shared/Select/Select'
import { QuizCategories, QuizDifficulties, QuizTime, QuizType } from '../../global.types'
import { Heading } from '../../shared/Heading/Heading'
import { useEffect, useState } from 'react'

/* 
    1. - OK - Number input for “number of questions”. Limit from 5 to 15
    2. - OK - Select input for “category” with required values 
    3. - OK - Select input for “difficulty” with required values (any || easy || medium || hard)
    4. - OK - Select input for “type” with required values (any || multiple choice || true/false)
    5. - OK - Select input for “time” with values: 1m, 2m, 5m
    6. - OK - Button “Start quiz”
    7. - OK - Button “See my statistics”
    8. Style everything!
*/

export const Home = () => {
  const [state, setState] = useState({
    questionAmountMin: 5,
    questionAmountMax: 15,
    currentQuestionAmount: 5,
    category: QuizCategories.ANY.id,
    difficulty: QuizDifficulties.ANY.id,
    type: QuizType.ANY.id,
    time: QuizTime.ANY.id
  })

  const [apiURL, setApiURL] = useState(
    `https://opentdb.com/api.php?amount=${state.currentQuestionAmount}`
  )
  const BASEURL = `https://opentdb.com/api.php?`

  const setCategory = (id: string) => {
    setState((prev) => ({
      ...prev,
      category: id
    }))
  }
  const setDifficulty = (id: string) => {
    setState((prev) => ({
      ...prev,
      difficulty: id
    }))
  }
  const setType = (id: string) => {
    setState((prev) => ({
      ...prev,
      type: id
    }))
  }
  const setTime = (id: string) => {
    setState((prev) => ({
      ...prev,
      time: id
    }))
  }
  const setQuestionAmount = (count: number) => {
    setState((prev) => ({
      ...prev,
      currentQuestionAmount: count
    }))
  }

  const onStartHandler = () => {
    console.log('START')
  }

  const onShowStatisticsHandler = () => {
    console.log('STATISTICS')
  }

  useEffect(() => {
    const { category, currentQuestionAmount, difficulty, time, type } = state
    // Typical request https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple

    let urlParams = 'amount=' + currentQuestionAmount

    if (category !== 'any') urlParams += '&category=' + category
    if (difficulty !== 'any') urlParams += '&difficulty=' + difficulty
    if (type !== 'any') urlParams += '&type=' + type

    setApiURL(BASEURL + urlParams)
    console.log(time)
  }, [state, BASEURL])

  // FIXME - remove it later
  useEffect(() => {
    console.log(apiURL)
  }, [apiURL])

  return (
    <div className={styles.Home}>
      <div className={styles.heading}>
        <Heading pageName="Home" additionalText="Chose the quiz options!" />
      </div>
      <div className={styles.selects}>
        <Select callback={setCategory} optionObject={QuizCategories} />
        <Select callback={setDifficulty} optionObject={QuizDifficulties} />
        <Select callback={setType} optionObject={QuizType} />
        <Select callback={setTime} optionObject={QuizTime} />
      </div>
      <div className={styles.input}>
        <NumberInput
          callback={setQuestionAmount}
          min={state.questionAmountMin}
          max={state.questionAmountMax}
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
