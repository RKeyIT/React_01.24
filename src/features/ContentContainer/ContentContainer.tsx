import { PageNames } from '../../context/GameContext.types'
import { useGameContext } from '../../context/useGameContext'
import { Navigation } from '../Navigation/Navigation'
import { CloseButton } from '../../shared/CloseButton/CloseButton'
import { FC } from 'react'
import styles from './ContentContainer.module.css'
import { Outlet } from 'react-router-dom'

export const ContentContainer: FC = () => {
  const [context, setContext] = useGameContext()

  const onCloseButton = () => {
    setContext((prev) => ({
      ...prev,
      currentPage: PageNames.HOME
    }))
  }

  return (
    <div className={styles.ContentContainer}>
      <Navigation />
      <CloseButton callback={onCloseButton} title="Close quiz" />
      <Outlet />
    </div>
  )
}
