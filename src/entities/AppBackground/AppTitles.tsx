import styles from './AppTitles.module.css'
import { FC } from 'react'

export const AppTitles: FC = () => {
  return (
    <>
      <h1 className={styles.AppNameHeader}>QUIZzTRON</h1>
      <h2 className={styles.AppNameFooter}>QUIZzTRON</h2>
    </>
  )
}
