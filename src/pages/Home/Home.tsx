import { Button } from '../../shared/Button/Button'
import { NumberInput } from '../../entities/NumberInput/NumberInput'
import styles from './Home.module.css'
import { Select } from '../../shared/Select/Select'
import { QuizCategories, QuizDifficulties, QuizTime, QuizType } from '../../global.types'
import { useGameContext } from '../../context/GameContext'

export const Home = () => {
  const context = useGameContext()
  const settings = context.gameSettings

  const setQuestionAmount = (id: number) => settings.questionAmount = id
  const setCategory = (id: string) => settings.category = id
  const setDiff = (id: string) => settings.difficulty = id
  const setType = (id: string) =>  settings.type = id
  const setTime = (id: string) => settings.time = id

  const onStartHandler = () => console.log(context.getApiUrl())
  const onShowStatisticsHandler = () => console.log(context)

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
