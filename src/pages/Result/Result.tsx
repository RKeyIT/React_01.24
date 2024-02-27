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

  const getFormattedTime = () => {
    const mins = Math.floor(timeResult / 60)
    const secs = timeResult % 60

    const minutes = mins < 10 ? `0${mins}` : String(mins)
    const seconds = secs < 10 ? `0${secs}` : String(secs)

    return minutes + ':' + seconds
  }

  // LINK - ../Home/Home.tsx#RepeatableLogic-GAME_START
  //ANCHOR[id=RepeatableLogic-GAME_START]
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

  return (
    <div className={styles.Result}>
      <div className={styles.congratulations}>
        <TextField>Thank you for completing this quiz. Here are your results</TextField>
        <Table name="Quiz configuration" rows={tableRows} />
      </div>
      <div className={styles.summary}>
        <TextField>
          Your result: {rightAnswers}/{player_answers.length}
        </TextField>
        <TextField>Time result: {getFormattedTime()}</TextField>
        <ProgressBar />
      </div>
      <div className={styles.buttons}>
        <Button callback={onRestart} content="Restart" />
        <Button callback={onAnotherQuiz} style="green" content="Chose another quiz" />
        <Button callback={onStatistics} content="Overall statistics" />
      </div>
    </div>
  )
}

export default Result
