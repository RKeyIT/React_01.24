import { useAppSelector } from '../../store'
import styles from './Table.module.css'
import { FC } from 'react'

interface IProps {
  rows?: number
  name?: string
  categories?: string[]
  descriptions?: string[]
}

export const Table: FC<IProps> = ({ name = 'Table' }) => {
  const {category, difficulty, type, time} = useAppSelector(store => store.config)

  return (
    <div className={styles.Table}>
      <div className={styles.tableName}>{name}:</div>
      <div className={styles.row}>
        <div className={styles.category}>category</div>
        <div className={styles.description}>{category}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.category}>difficulty</div>
        <div className={styles.description}>{difficulty}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.category}>type</div>
        <div className={styles.description}>{type}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.category}>time</div>
        <div className={styles.description}>{time} {time === '1' ? 'minute' : 'minutes'}</div>
      </div>
    </div>
  )
}
