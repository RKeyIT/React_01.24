import { Button } from '../../shared/Button/Button'
import { NumberInput } from '../../entities/NumberInput/NumberInput'
import styles from './Home.module.css'
import { Select } from '../../shared/Select/Select'
import { QuizCategories, QuizDifficulties, QuizTime, QuizType } from '../../global.types'
import { useGameContext } from '../../context/GameContext/useGameContext'
import { PageNames } from '../../context/GameContext/GameContext.types'
import { Heading } from '../../shared/Heading/Heading'
import { Link } from 'react-router-dom'
import { URLs } from '../../router/router.types'

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

  return (
    <div className={styles.Home}>
      <div className={styles.heading}>
        <Heading pageName={PageNames.HOME} />
      </div>
      <div className={styles.selects}>
        <Select domId={'CategorySelect'} callback={setCategory} optionObject={QuizCategories} />
        <Select domId={'DifficultySelect'} callback={setDiff} optionObject={QuizDifficulties} />
        <Select domId={'TypeSelect'} callback={setType} optionObject={QuizType} />
        <Select domId={'TimeSelect'} callback={setTime} optionObject={QuizTime} />
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
        <Link to={URLs.STATISTICS}>
          <Button content="See my statistics" style="white" />
        </Link>
        <Link to={URLs.GAME}>
          <Button content="Start quiz" style="green" />
        </Link>
      </div>
    </div>
  )
}
