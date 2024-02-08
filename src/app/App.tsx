import styles from './App.module.css'
import { GameProvider } from '../context/GameContext'
import { AppTitles } from '../entities/AppBackground/AppTitles'
import { ContentContainer } from '../features/ContentContainer/ContentContainer'
import { RouterProvider } from 'react-router-dom'
import { ROUTER } from '../router'

export const App = () => {
  return (
    <div className={styles.App}>
      <AppTitles />
      <GameProvider>
        <RouterProvider router={ROUTER} />
      </GameProvider>
    </div>
  )
}
