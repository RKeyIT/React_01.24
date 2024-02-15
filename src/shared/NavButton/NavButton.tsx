import { NavLink } from 'react-router-dom'
import { URLS } from '../../router/router.types'
import styles from './NavButton.module.css'
import { FC } from 'react'
import { PageNames } from '../../global.types'

interface IProps {
  content: PageNames
  navLink: URLS
  disabled?: boolean
}

export const NavButton: FC<IProps> = ({ navLink, content, disabled }) => {
  const navLinkClass = `${styles.a}`
  const activeNav = `${styles.a} ${styles.active}`

  return (
    <NavLink to={navLink} className={({ isActive }) => (isActive ? activeNav : navLinkClass)}>
      <button disabled={disabled} type="button" className={styles.NavButton}>
        {content}
      </button>
    </NavLink>
  )
}
