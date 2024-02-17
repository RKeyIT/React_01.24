import { Link, useNavigate } from 'react-router-dom'
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

export const Result: FC = () => {
  const { player_answers, timeResult, isGameStarted } = useAppSelector((store) => store.game)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

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

  return (
    <div className={styles.Result}>
      <Heading pageName={PageNames.RESULT} />
      <div className={styles.congratulations}>
        <TextField>Thank you for completing this quiz. Here are your results</TextField>
        <Table name="Quiz configuration" />
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
        <Link to={URLS.HOME}>
          <Button content="Chose another quiz" />
        </Link>
      </div>
    </div>
  )
}
