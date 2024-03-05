import { useNavigate } from 'react-router-dom'
import { Button } from '../../shared/Button/Button'
import { ProgressBar } from '../../shared/ProgressBar/ProgressBar'
import { Table } from '../../shared/Table/Table'
import { TextField } from '../../shared/TextField/TextField'
import styles from './Result.module.css'
import { FC, useEffect } from 'react'
import { URLS } from '../../router/router.types'
import { ITableRow } from '../../global.types'
import { useAppDispatch, useAppSelector } from '../../store'
import { mockGameOff, setGameStartAsTrueAC } from '../../store/gameSlice'
import { resetConfigAC } from '../../store/configSlice'
import {
  getCategoryName,
  getDifficultyName,
  getTimeName,
  getTypeName
} from '../../global.contsants'
import { persistData } from '../../store/persistorSlice'
import { motion } from 'framer-motion'
import { getFormattedTime } from '../../utils/getFormattedTime'

export const Result: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { questionCollection, player_answers, timeResult, isGameStarted, isMockGame } =
    useAppSelector((store) => store.game)
  const { category, difficulty, type, time } = useAppSelector((store) => store.config)

  useEffect(() => {
    if (questionCollection.length && player_answers.length) {
      isMockGame
        ? dispatch(mockGameOff())
        : dispatch(persistData({ questionCollection, player_answers }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const categoryName = getCategoryName(category)
  const difficultyName = getDifficultyName(difficulty)
  const typeName = getTypeName(type)
  const timeName = getTimeName(time)

  const tableRows: ITableRow[] = [
    { category: 'category', description: categoryName },
    { category: 'difficulty', description: difficultyName },
    { category: 'type', description: typeName },
    { category: 'time', description: timeName }
  ]

  let rightAnswers = 0

  player_answers.forEach((el) => {
    if (el) rightAnswers++
  })

  const onRestart = () => {
    if (isGameStarted) {
      throw new Error('Game already started!')
    }

    dispatch(setGameStartAsTrueAC())
    navigate(URLS.GAME) // { replace: true }
  }

  const onAnotherQuiz = () => {
    dispatch(resetConfigAC())
    navigate(URLS.HOME) // { replace: true }
  }

  const onStatistics = () => {
    dispatch(resetConfigAC())
    navigate(URLS.STATISTICS) // { replace: true }
  }

  const timeSpent = getFormattedTime(timeResult)

  return (
    <motion.div className={styles.Result}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}>
      <div className={styles.congratulations}>
        <TextField>Thank you for completing this quiz. Here are your results</TextField>
        <Table name="Quiz configuration" rows={tableRows} />
      </div>
      <div className={styles.summary}>
        <TextField>
          Your result: {rightAnswers}/{player_answers.length}
        </TextField>
        <TextField>Time result: {timeSpent}</TextField>
        <ProgressBar />
      </div>
      <div className={styles.buttons}>
        <Button callback={onRestart} content="Restart" />
        <Button callback={onAnotherQuiz} style="green" content="Chose another quiz" />
        <Button callback={onStatistics} content="Overall statistics" />
      </div>
    </motion.div>
  )
}

export default Result
