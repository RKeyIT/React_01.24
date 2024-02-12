import styles from './Timer.module.css'
import { FC, useEffect, useState } from 'react'

interface IProps {
  seconds?: number,
  timeoutCallback?: () => void
}

export const Timer: FC<IProps> = ({ seconds = 1, timeoutCallback = () => {} }) => { 
  const initialState = {
    minutes: getMinutes(seconds),
    seconds: seconds % 60
  }

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

    return () => clearInterval(interval)
  }, [])

  // REVIEW - is it clear usage?
  useEffect(() => {
    if (time.minutes === 0 && time.seconds === 0) {
      timeoutCallback()
      setTime(initialState)
    }
  }, [time])

  function getMinutes(seconds: number) {
    return Math.floor(seconds / 60)
  }

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
