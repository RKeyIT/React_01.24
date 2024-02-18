import styles from './Table.module.css'
import { FC } from 'react'

interface IRow {
  category: string
  description: string
}

interface IProps {
  name: string
  rows: IRow[]
}

export const Table: FC<IProps> = ({ name, rows }) => {
  return (
    <div className={styles.Table}>
      <div className={styles.tableName}>{name}:</div>
      {rows.map((el, index) => {
        return (<div className={styles.row} key={el.category+index}>
          <div className={styles.category}>{el.category}</div>
          <div className={styles.description}>{el.description}</div>
        </div>)
      })}
    </div>
  )
}
