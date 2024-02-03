import styles from './Heading.module.css'
import { FC } from 'react'

interface IProps {
  pageName: string
}

export const Heading: FC<IProps> = ({ pageName }) => {
  return (
    <div className={styles.Heading}>
      <h2 className={`${styles.h2} ${styles.mainHeading}`}>{pageName}</h2>
    </div>
  )
}
