import { Button } from '../../shared/Button/Button'
import { NumberInput } from '../../entities/NumberInput/NumberInput'
import styles from './Home.module.css'
import { Select } from '../../shared/Select/Select'
import { PageNames, QuizCategories, QuizDifficulties, QuizTime, QuizType } from '../../global.types'
import { Heading } from '../../shared/Heading/Heading'
import { Link } from 'react-router-dom'
import { URLS } from '../../router/router.types'
import { useAppDispatch, useAppSelector } from '../../store'
import { amountAC, categoryAC, difficultyAC, timeAC, typeAC } from '../../store/configSlice'

export const Home = () => {
  const config = useAppSelector(store => store.config)

  const dispatch = useAppDispatch()

  const dispatchAmount = (payload: number) => dispatch(amountAC(payload));
  const dispatchCategory = (payload: string) => dispatch(categoryAC(payload));
  const dispatchDifficulty = (payload: string) => dispatch(difficultyAC(payload));
  const dispatchType = (payload: string) => dispatch(typeAC(payload));
  const dispatchTime = (payload: string) => dispatch(timeAC(payload));

  return (
    <div className={styles.Home}>
      <div className={styles.heading}>
        <Heading pageName={PageNames.HOME} />
      </div>
      <div className={styles.selects}>
        <Select domId={'CategorySelect'} callback={dispatchCategory} optionObject={QuizCategories} />
        <Select domId={'DifficultySelect'} callback={dispatchDifficulty} optionObject={QuizDifficulties} />
        <Select domId={'TypeSelect'} callback={dispatchType} optionObject={QuizType} />
        <Select domId={'TimeSelect'} callback={dispatchTime} optionObject={QuizTime} />
      </div>
      <div className={styles.input}>
        <NumberInput
          callback={dispatchAmount}
          min={config.minQuestionsCount}
          max={config.maxQuestionsCount}
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
