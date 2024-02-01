import { Button } from '../../shared/Button/Button'
import { NumberInput } from '../../entities/NumberInput/NumberInput'
import styles from './Home.module.css'
import { Select } from '../../shared/Select/Select'
import { QuizCategories, QuizDifficulties, QuizTime, QuizType } from '../../global.types'
import { Heading } from '../../shared/Heading/Heading'
import { useEffect, useState } from 'react'

export const Home = () => {
  // FIXME - Create reducer to replece logic of this component
  const BASEURL = `https://opentdb.com/api.php?`

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
    console.log(apiURL)
  }

  const onShowStatisticsHandler = () => {
    console.log('STATISTICS')
  }

  useEffect(() => {
    const { category, currentQuestionAmount, difficulty, type } = state
    // Request example: https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple

    let urlParams = 'amount=' + currentQuestionAmount

    if (category !== 'any') urlParams += '&category=' + category
    if (difficulty !== 'any') urlParams += '&difficulty=' + difficulty
    if (type !== 'any') urlParams += '&type=' + type

    setApiURL(BASEURL + urlParams)
  }, [state, BASEURL])

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
