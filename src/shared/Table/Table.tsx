import { ITableRow } from '../../global.types'
import styles from './Table.module.css'
import { FC } from 'react'

interface IProps {
  name: string
  rows: ITableRow[]
}

export const Table: FC<IProps> = ({ name, rows }) => {
  const tableName = rows.length ? name : 'THE DATA IS NOT EXIST YET!'

  return (
    <div className={styles.Table}>
      <div className={styles.tableName}>{tableName}:</div>
      {rows.map((el, index) => {
        return (
          <div className={styles.row} key={el.category + index}>
            <div className={styles.category}>{el.category}</div>
            <div className={styles.description}>{el.description}</div>
          </div>
        )
      })}
    </div>
  )
}
