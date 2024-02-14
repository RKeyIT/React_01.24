import styles from './Timer.module.css'
import { FC, useEffect, useMemo, useState } from 'react'

interface IProps {
  seconds?: number
  timeoutCallback?: () => void
}

export const Timer: FC<IProps> = ({ seconds = 60, timeoutCallback = () => {} }) => {
  // FIXME - Learn it deeper!
  // NOTE - IDK what is it =D - It's the linter hint, that I must to do it.
  const initialState = useMemo(
    () => ({
      minutes: Math.floor(seconds / 60),
      seconds: seconds % 60
    }),
    [seconds]
  )

  const [time, setTime] = useState(initialState)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev.minutes <= 0 && prev.seconds <= 0) {
          clearInterval(interval)
          return prev
        }

        return prev.seconds > 0
          ? {
              minutes: prev.minutes,
              seconds: prev.seconds - 1
            }
          : {
              minutes: prev.minutes - 1,
              seconds: 59
            }
      })
    }, 1000)

    return () => {
      setTime(initialState)
      return clearInterval(interval)
    }
  }, [timeoutCallback, initialState])

  // REVIEW - is it clear usage?
  useEffect(() => {
    if (time.minutes === 0 && time.seconds === 0) {
      timeoutCallback()
      setTime(initialState)
    }
  }, [time, initialState, timeoutCallback])

  function getFormattedTime() {
    const mins: string = time.minutes < 10 ? `0${time.minutes}` : String(time.minutes)
    const secs: string = time.seconds < 10 ? `0${time.seconds}` : String(time.seconds)

    return mins + ':' + secs
  }

  function isHalfMinute() {
    return time.minutes === 0 && time.seconds <= 30 && time.seconds > 10
  }

  function isCriticalTime() {
    return time.minutes === 0 && time.seconds <= 10 && time.seconds > 0
  }

  function isTimeOut() {
    return time.minutes === 0 && time.seconds <= 0
  }

  return (
    <span
      className={`${styles.Timer} ${isHalfMinute() && styles.halfMinute} ${
        isCriticalTime() && styles.criticalTime
      } ${isTimeOut() && styles.timeOut}`}>
      {getFormattedTime()}
    </span>
  )
}
