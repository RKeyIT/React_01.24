import { useAppSelector } from '../../store'
import styles from './ProgressBar.module.css'
import { FC } from 'react'

export const ProgressBar: FC = () => {
  const { questionCollection, player_answers } = useAppSelector(store => store.game)
  const barsCount = questionCollection.length

  const barArr = new Array(barsCount)
    .fill(null).map((_el, index) => {
      const classNames = player_answers[index] === null
        ? styles.singleBar
        : player_answers[index] === true
          ? `${styles.singleBar} ${styles.green}`
          : `${styles.singleBar} ${styles.red}`

      return <div className={classNames} key={index}></div>
    })

  return (
    <div className={styles.ProgressBar}>
      {barArr}
    </div>
  )
}
