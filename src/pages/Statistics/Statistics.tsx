import { PageNames } from '../../context/GameContext/GameContext.types'
import { Heading } from '../../shared/Heading/Heading'
import styles from './Statistics.module.css'
import { FC } from 'react'

export const Statistics: FC = () => {
  return (
    <div className={styles.Statistics}>
      <Heading pageName={PageNames.STATISTICS} />
    </div>
  )
}
