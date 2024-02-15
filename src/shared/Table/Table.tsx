import {
  getCategoryName,
  getDifficultyName,
  getTimeName,
  getTypeName
} from '../../global.contsants'
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
  const { category, difficulty, type, time } = useAppSelector((store) => store.config)
  const categoryName = getCategoryName(category)
  const difficultyName = getDifficultyName(difficulty)
  const typeName = getTypeName(type)
  const timeName = getTimeName(time)

  return (
    <div className={styles.Table}>
      <div className={styles.tableName}>{name}:</div>
      <div className={styles.row}>
        <div className={styles.category}>category</div>
        <div className={styles.description}>{categoryName}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.category}>difficulty</div>
        <div className={styles.description}>{difficultyName}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.category}>type</div>
        <div className={styles.description}>{typeName}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.category}>time</div>
        <div className={styles.description}>{timeName}</div>
      </div>
    </div>
  )
}
