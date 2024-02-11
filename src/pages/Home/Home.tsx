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

  const configSetter = {
    questAmount: (id: number) => dispatch({type: ActionTypeEnum.AMOUNT, payload: id}),
    category: (id: string) => dispatch({type: ActionTypeEnum.CATEGORY, payload: id}),
    difficulty: (id: string) => dispatch({type: ActionTypeEnum.DIFFICULTY, payload: id}),
    type: (id: string) => dispatch({type: ActionTypeEnum.TYPE, payload: id}),
    time: (id: string) => dispatch({type: ActionTypeEnum.TIME, payload: id}),
  }

  return (
    <div className={styles.Home}>
      <div className={styles.heading}>
        <Heading pageName={PageNames.HOME} />
      </div>
      <div className={styles.selects}>
        <Select domId={'CategorySelect'} callback={configSetter.category} optionObject={QuizCategories} />
        <Select domId={'DifficultySelect'} callback={configSetter.difficulty} optionObject={QuizDifficulties} />
        <Select domId={'TypeSelect'} callback={configSetter.type} optionObject={QuizType} />
        <Select domId={'TimeSelect'} callback={configSetter.time} optionObject={QuizTime} />
      </div>
      <div className={styles.input}>
        <NumberInput
          callback={configSetter.questAmount}
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
