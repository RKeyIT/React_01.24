import { Navigation } from '../Navigation/Navigation'
import { CloseButton } from '../../shared/CloseButton/CloseButton'
import { FC } from 'react'
import styles from './ContentContainer.module.css'
import { Outlet } from 'react-router-dom'

export const ContentContainer: FC = () => {
  return (
    <div className={styles.ContentContainer}>
      <Navigation />
      <CloseButton title="Close quiz" />
      <Outlet />
    </div>
  )
}
