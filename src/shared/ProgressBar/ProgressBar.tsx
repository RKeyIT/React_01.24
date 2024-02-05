import styles from './ProgressBar.module.css'
import { FC } from 'react'

interface IProps {
  barsCount?: number
}

export const ProgressBar: FC<IProps> = ({ barsCount = 5 }) => {
  const arr = new Array(barsCount).fill(null)

  return (
    <div className={styles.ProgressBar}>
      <div className={`${styles.singleBar} ${styles.green}`}></div>
      <div className={`${styles.singleBar} ${styles.green}`}></div>
      <div className={`${styles.singleBar} ${styles.red}`}></div>
      <div className={`${styles.singleBar} ${styles.green}`}></div>
      <div className={`${styles.singleBar} ${styles.green}`}></div>

      {arr.map((_el, index) => {
        return <div className={styles.singleBar} key={index}></div>
      })}
      <div className={`${styles.singleBar} ${styles.red}`}></div>
      <div className={`${styles.singleBar} ${styles.red}`}></div>
      <div className={`${styles.singleBar} ${styles.green}`}></div>
      <div className={`${styles.singleBar} ${styles.red}`}></div>
      <div className={`${styles.singleBar} ${styles.green}`}></div>
    </div>
  )
}
