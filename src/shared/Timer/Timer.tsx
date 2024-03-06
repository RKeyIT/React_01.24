import { getFormattedTime } from '../../utils/getFormattedTime'
import styles from './Timer.module.css'
import { FC, useEffect, useState } from 'react'

interface IProps {
  seconds?: number
  timeoutCallback?: () => void
}

export const Timer: FC<IProps> = ({ seconds = 60, timeoutCallback = () => {} }) => {
  const [time, setTime] = useState(seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          clearInterval(interval)
          return prev
        }

        return prev - 1
      })
    }, 1000)

    return () => {
      clearInterval(interval)
      setTime(seconds)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeoutCallback])

  useEffect(() => {
    if (time === 0) {
      timeoutCallback()
      setTime(seconds)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  function isHalfMinute() {
    return time <= 30 && time > 10
  }

  function isCriticalTime() {
    return time <= 10 && time > 0
  }

  function isTimeOut() {
    return time <= 0
  }

  const currentTimerViewState = getFormattedTime(time)

  return (
    <span
      className={`${styles.Timer} ${isHalfMinute() && styles.halfMinute} ${
        isCriticalTime() && styles.criticalTime
      } ${isTimeOut() && styles.timeOut}`}>
      {currentTimerViewState}
    </span>
  )
}
