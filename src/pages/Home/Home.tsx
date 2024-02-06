import { Button } from '../../shared/Button/Button'
import { NumberInput } from '../../entities/NumberInput/NumberInput'
import styles from './Home.module.css'
import { Select } from '../../shared/Select/Select'
import { QuizCategories, QuizDifficulties, QuizTime, QuizType } from '../../global.types'
import { useGameContext } from '../../context/useGameContext'
import { PageNames } from '../../context/GameContext.types'

export const Home = () => {
  const [context, setContext] = useGameContext()

  const setQuestionAmount = (id: number) => {
    setContext((prev) => ({
      ...prev,
      gameSettings: {
        ...prev.gameSettings,
        questionAmount: id
      }
    }))
  }
  // const setQuestionAmount = (id: number) => settings.questionAmount = id
  const setCategory = (id: string) => {
    setContext((prev) => ({
      ...prev,
      gameSettings: {
        ...prev.gameSettings,
        ['category']: id
      }
    }))
  }
  const setDiff = (id: string) => {
    setContext((prev) => ({
      ...prev,
      gameSettings: {
        ...prev.gameSettings,
        difficulty: id
      }
    }))
  }
  const setType = (id: string) => {
    setContext((prev) => ({
      ...prev,
      gameSettings: {
        ...prev.gameSettings,
        type: id
      }
    }))
  }
  const setTime = (id: string) => {
    setContext((prev) => ({
      ...prev,
      gameSettings: {
        ...prev.gameSettings,
        time: id
      }
    }))
  }

  const onStartHandler = () => {
    setContext((prev) => ({
      ...prev,
      currentPage: PageNames.GAME
    }))
    console.log(context.getApiUrl())
  }
  const onShowStatisticsHandler = () => {
    setContext((prev) => ({
      ...prev,
      currentPage: PageNames.STATISTICS
    }))
  }

  return (
    <div className={styles.Home}>
      <div className={styles.selects}>
        <Select callback={setCategory} optionObject={QuizCategories} />
        <Select callback={setDiff} optionObject={QuizDifficulties} />
        <Select callback={setType} optionObject={QuizType} />
        <Select callback={setTime} optionObject={QuizTime} />
      </div>
      <div className={styles.input}>
        <NumberInput
          callback={setQuestionAmount}
          min={context.minQuestionsCount}
          max={context.maxQuestionsCount}
          label="Count of questions: "
        />
      </div>
      <div className={styles.buttons}>
        <Button callback={onShowStatisticsHandler} content="See my statistics" style="white" />
        <Button callback={onStartHandler} content="Start quiz" style="green" />
      </div>
    </div>
  )
}
