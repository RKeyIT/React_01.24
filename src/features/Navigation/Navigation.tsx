import { NavButton } from '../../shared/NavButton/NavButton'
import styles from './Navigation.module.css'
import { FC, useEffect, useState } from 'react'
import { URLS } from '../../router/router.types'
import { PageNames } from '../../global.types'
import { useLocation } from 'react-router-dom'

export const Navigation: FC = () => {
  const path = useLocation().pathname

  const [isHomeDisabled, setHomeDisabled] = useState(false)
  const [isStatisticsDisabled, setStatisticsDisabled] = useState(false)

  useEffect(() => {
    setHomeDisabled(path === URLS.GAME)
    setStatisticsDisabled(path === URLS.GAME)
  }, [path])

  return (
    <nav className={styles.Navigation}>
      <NavButton disabled={isHomeDisabled} navLink={URLS.HOME} content={PageNames.HOME} />
      <NavButton
        disabled={isStatisticsDisabled}
        navLink={URLS.STATISTICS}
        content={PageNames.STATISTICS}
      />
    </nav>
  )
}
