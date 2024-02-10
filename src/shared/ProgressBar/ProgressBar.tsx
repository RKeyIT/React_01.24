import styles from './ProgressBar.module.css'
import { FC } from 'react'

interface IProps {
  barsCount?: number
}

export const ProgressBar: FC<IProps> = ({ barsCount = 5 }) => {
  const barArr = new Array(barsCount)
    .fill(null).map((_el, index) => <div className={styles.singleBar} key={index}></div>)

  return (
    <div className={styles.ProgressBar}>
      {barArr}
    </div>
  )
}
