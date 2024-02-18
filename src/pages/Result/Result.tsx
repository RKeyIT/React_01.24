import { useNavigate } from 'react-router-dom'
import { Button } from '../../shared/Button/Button'
import { Heading } from '../../shared/Heading/Heading'
import { ProgressBar } from '../../shared/ProgressBar/ProgressBar'
import { Table } from '../../shared/Table/Table'
import { TextField } from '../../shared/TextField/TextField'
import styles from './Result.module.css'
import { FC } from 'react'
import { URLS } from '../../router/router.types'
import { PageNames } from '../../global.types'
import { useAppDispatch, useAppSelector } from '../../store'
import { setGameStartAsTrueAC } from '../../store/gameSlice'
import { resetConfigAC } from '../../store/configSlice'
import { getCategoryName, getDifficultyName, getTimeName, getTypeName } from '../../global.contsants'

interface IRow {
  category: string
  description: string
}

export const Result: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { player_answers, timeResult, isGameStarted } = useAppSelector((store) => store.game)
  const { category, difficulty, type, time } = useAppSelector((store) => store.config)

  const categoryName = getCategoryName(category)
  const difficultyName = getDifficultyName(difficulty)
  const typeName = getTypeName(type)
  const timeName = getTimeName(time)

  const tableRows: IRow[] = [
    { category: 'category', description: categoryName },
    { category: 'difficulty', description: difficultyName},
    { category: 'type', description: typeName},
    { category: 'time', description: timeName},
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
    navigate(URLS.GAME, { replace: true })
  }

  const onAnotherQuiz = () => {
    dispatch(resetConfigAC())
    navigate(URLS.HOME, { replace: true })
  }

  return (
    <div className={styles.Result}>
      <Heading pageName={PageNames.RESULT} />
      <div className={styles.congratulations}>
        <TextField>Thank you for completing this quiz. Here are your results</TextField>
        <Table name="Quiz configuration" rows={tableRows} />
      </div>
      <div className={styles.summary}>
        <TextField>
          You answered {rightAnswers} out of {player_answers.length} questions correctly
        </TextField>
        <TextField>Time result: {getFormattedTime()}</TextField>
        <ProgressBar />
      </div>
      <div className={styles.buttons}>
        <Button callback={onRestart} content="Restart" />
        <Button callback={onAnotherQuiz} content="Chose another quiz" />
      </div>
    </div>
  )
}
