import { Button } from '../../shared/Button/Button'
import { NumberInput } from '../../entities/NumberInput/NumberInput'
import styles from './Home.module.css'
import { Select } from '../../shared/Select/Select'
import { QuizCategories, QuizDifficulties, QuizTime, QuizType } from '../../global.types'
import { PageNames } from '../../context/GameContext/GameContext.types'
import { Heading } from '../../shared/Heading/Heading'
import { Link } from 'react-router-dom'
import { URLS } from '../../router/router.types'
import { useQuizConfigDispatcherContext } from '../../context/QuizConfigContext/QuizConfigContext'
import { ActionTypeEnum } from '../../context/QuizConfigContext/QuizConfigContext.types'

export const Home = () => {
  const [ctx, dispatch] = useQuizConfigDispatcherContext()

  const setQuestionAmount = (id: number) => {
    dispatch({type: ActionTypeEnum.AMOUNT, payload: id})
  }
  const setCategory = (id: string) => {
    dispatch({type: ActionTypeEnum.CATEGORY, payload: id})
  }
  const setDiff = (id: string) => {
    dispatch({type: ActionTypeEnum.DIFFICULTY, payload: id})
  }
  const setType = (id: string) => {
    dispatch({type: ActionTypeEnum.TYPE, payload: id})
  }
  const setTime = (id: string) => {
    dispatch({type: ActionTypeEnum.TIME, payload: id})
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
          min={ctx.minQuestionsCount}
          max={ctx.maxQuestionsCount}
          label="Count of questions: "
        />
      </div>
      <div className={styles.buttons}>
        <Link to={URLS.STATISTICS}>
          <Button content="See my statistics" style="white" />
        </Link>
        <Link to={URLS.GAME}>
          <Button content="Start quiz" style="green" />
        </Link>
      </div>
    </div>
  )
}
