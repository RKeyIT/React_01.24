import { NavLink } from 'react-router-dom'
import { PageNames } from '../../context/GameContext.types'
import { URLs } from '../../router/router.types'
import styles from './NavButton.module.css'
import { FC } from 'react'

interface IProps {
  content: PageNames
  navLink: URLs
}

export const NavButton: FC<IProps> = ({ navLink, content }) => {
  const navLinkClass = `${styles.a}`
  const activeNav = `${styles.a} ${styles.active}`

  return (
    <NavLink to={navLink} className={({ isActive }) => (isActive ? activeNav : navLinkClass)}>
      <button type="button" onClick={() => {}} className={styles.NavButton}>
        {content}
      </button>
    </NavLink>
  )
}
