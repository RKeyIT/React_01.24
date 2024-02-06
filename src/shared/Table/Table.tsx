import styles from './Table.module.css'
import { FC } from 'react'

interface IProps {
  rows?: number
  name?: string
  categories?: string[]
  descriptions?: string[]
}

export const Table: FC<IProps> = ({ name = 'Table' }) => {
  return (
    <div className={styles.Table}>
      <div className={styles.tableName}>{name}:</div>
      <div className={styles.row}>
        <div className={styles.category}>type</div>
        <div className={styles.description}>multiple</div>
      </div>
      <div className={styles.row}>
        <div className={styles.category}>category</div>
        <div className={styles.description}>Art</div>
      </div>
      <div className={styles.row}>
        <div className={styles.category}>time</div>
        <div className={styles.description}>one minute</div>
      </div>
      <div className={styles.row}>
        <div className={styles.category}>difficulty</div>
        <div className={styles.description}>hard</div>
      </div>
    </div>
  )
}
