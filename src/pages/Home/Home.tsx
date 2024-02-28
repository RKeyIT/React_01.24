import { Button } from '../../shared/Button/Button'
import styles from './Home.module.css'
import { Select } from '../../shared/Select/Select'
import { useNavigate } from 'react-router-dom'
import { URLS } from '../../router/router.types'
import { useAppDispatch, useAppSelector } from '../../store'
import {
  amountAC,
  categoryAC,
  difficultyAC,
  resetConfigAC,
  timeAC,
  typeAC
} from '../../store/configSlice'
import { FC, useEffect } from 'react'
import { QuizCategories, QuizDifficulties, QuizTime, QuizType } from '../../global.contsants'
import { setGameStartAsTrueAC } from '../../store/gameSlice'
import { NumberSelect } from '../../entities/NumberSelect/NumberSelect'
import { motion } from 'framer-motion'

export const Home: FC = () => {
  const config = useAppSelector((state) => state.config)
  const game = useAppSelector((state) => state.game)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(resetConfigAC())
  }, [dispatch])

  const dispatchAmount = (payload: number) => dispatch(amountAC(payload))
  const dispatchCategory = (payload: string) => dispatch(categoryAC(payload))
  const dispatchDifficulty = (payload: string) => dispatch(difficultyAC(payload))
  const dispatchType = (payload: string) => dispatch(typeAC(payload))
  const dispatchTime = (payload: string) => dispatch(timeAC(payload))

  // LINK - ../Result/Result.tsx#RepeatableLogic-GAME_START
  //ANCHOR[id=RepeatableLogic-GAME_START]
  const onStartGame = () => {
    if (game.isGameStarted) {
      throw new Error('Game already started!')
    }

    dispatch(setGameStartAsTrueAC())
    navigate(URLS.GAME)
  }

  const onGoStatistics = () => {
    navigate(URLS.STATISTICS)
  }

  return (
    <motion.div className={styles.Home}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}>
      <div className={styles.selects}>
        <Select
          domId={'CategorySelect'}
          callback={dispatchCategory}
          optionObject={QuizCategories}
        />
        <Select
          domId={'DifficultySelect'}
          callback={dispatchDifficulty}
          optionObject={QuizDifficulties}
        />
        <Select domId={'TypeSelect'} callback={dispatchType} optionObject={QuizType} />
        <Select domId={'TimeSelect'} callback={dispatchTime} optionObject={QuizTime} />
      </div>
      <div className={styles.input}>
        <NumberSelect
          callback={dispatchAmount}
          min={config.minQuestionsCount}
          max={config.maxQuestionsCount}
          title="Count of questions:"
        />
      </div>
      <div className={styles.buttons}>
        <Button callback={onGoStatistics} content="See my statistics" style="white" />
        <Button callback={onStartGame} content="Start quiz" style="green" />
      </div>
    </motion.div>
  )
}

export default Home
