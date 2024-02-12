import { useAppSelector } from '../../store'
import styles from './ProgressBar.module.css'
import { FC } from 'react'

export const ProgressBar: FC = () => {
  const { questionCollection } = useAppSelector(store => store.game)
  const barsCount = questionCollection.length

  const barArr = new Array(barsCount)
    .fill(null).map((_el, index) => <div className={styles.singleBar} key={index}></div>)

  return (
    <div className={styles.ProgressBar}>
      {barArr}
    </div>
  )
}
