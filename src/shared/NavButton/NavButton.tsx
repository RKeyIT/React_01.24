import { NavLink } from 'react-router-dom'
import { PageNames } from '../../context/GameContext/GameContext.types'
import { URLS } from '../../router/router.types'
import styles from './NavButton.module.css'
import { FC } from 'react'

interface IProps {
  content: PageNames
  navLink: URLS
}

export const NavButton: FC<IProps> = ({ navLink, content }) => {
  const navLinkClass = `${styles.a}`
  const activeNav = `${styles.a} ${styles.active}`

  return (
    <NavLink to={navLink} className={({ isActive }) => (isActive ? activeNav : navLinkClass)}>
      <button type="button" className={styles.NavButton}>
        {content}
      </button>
    </NavLink>
  )
}
