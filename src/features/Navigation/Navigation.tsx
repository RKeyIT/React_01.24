import { PageNames } from '../../context/GameContext.types'
import { NavButton } from '../../shared/NavButton/NavButton'
import styles from './Navigation.module.css'
import { FC } from 'react'

export const Navigation: FC = () => {
  return (
    <div className={styles.Navigation}>
      <NavButton>{PageNames.HOME}</NavButton>
      <NavButton>{PageNames.GAME}</NavButton>
      <NavButton>{PageNames.RESULT}</NavButton>
      <NavButton>{PageNames.STATISTICS}</NavButton>
    </div>
  )
}
