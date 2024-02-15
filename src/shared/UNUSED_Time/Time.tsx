import styles from './Time.module.css'
import { FC } from 'react'

interface IProps {
  seconds: number
}

export const Time: FC<IProps> = ({ seconds }) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60

  const formatToTimeUnit = (unit: number) => (unit < 10 ? '0' : '' + unit)
  const isHalfMinute = () => mins === 0 && secs <= 30 && secs > 10
  const isCriticalTime = () => mins === 0 && secs <= 10 && secs > 0
  const isTimeOut = () => mins === 0 && secs <= 0

  const getClassName = () => {
    if (isTimeOut()) return `${styles.Time} ${styles.timeOut}`
    if (isCriticalTime()) return `${styles.Time} ${styles.criticalTime}`
    if (isHalfMinute()) return `${styles.Time} ${styles.halfMinute}`
    return `${styles.Time}`
  }

  const getTime = () => `${formatToTimeUnit(mins)}:${formatToTimeUnit(secs)}`

  return <span className={getClassName()}>
  {getTime()}
</span>
}
