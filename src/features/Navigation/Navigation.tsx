import { PageNames } from '../../context/GameContext.types'
import { NavButton } from '../../shared/NavButton/NavButton'
import styles from './Navigation.module.css'
import { FC } from 'react'
import { URLs } from '../../router/router.types'

export const Navigation: FC = () => {
  return (
    <nav className={styles.Navigation}>
      <NavButton navLink={URLs.HOME} content={PageNames.HOME} />
      <NavButton navLink={URLs.GAME} content={PageNames.GAME} />
      <NavButton navLink={URLs.RESULT} content={PageNames.RESULT} />
      <NavButton navLink={URLs.STATISTICS} content={PageNames.STATISTICS} />
    </nav>
  )
}
