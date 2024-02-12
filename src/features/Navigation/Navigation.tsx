import { NavButton } from '../../shared/NavButton/NavButton'
import styles from './Navigation.module.css'
import { FC } from 'react'
import { URLS } from '../../router/router.types'
import { PageNames } from '../../global.types'

export const Navigation: FC = () => {
  // NOTE - Are we need the Game page in navigation?

  return (
    <nav className={styles.Navigation}>
      <NavButton navLink={URLS.HOME} content={PageNames.HOME} />
      <NavButton navLink={URLS.GAME} content={PageNames.GAME} />
      <NavButton navLink={URLS.RESULT} content={PageNames.RESULT} />
      <NavButton navLink={URLS.STATISTICS} content={PageNames.STATISTICS} />
    </nav>
  )
}
