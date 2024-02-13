import { Navigation } from '../Navigation/Navigation'
import { CloseButton } from '../../entities/CloseButton/CloseButton'
import { FC } from 'react'
import styles from './ContentContainer.module.css'
import { Outlet } from 'react-router-dom'

export const ContentContainer: FC = () => {
  return (
    <div className={styles.ContentContainer} id="ContentContainer">
      <Navigation />
      <CloseButton />
      <Outlet />
    </div>
  )
}
